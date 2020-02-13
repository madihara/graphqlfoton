const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://madison:h5620mad@cluster0-4ebdg.mongodb.net/test?retryWrites=true&w=majority');
mongoose.connection.once('open', () => {
  console.log('connected to mongo')
})

// middleware
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));


//listen on 4000
app.listen(4000, () => {
  console.log('listening for requests on port 4000');
});