const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

// middleware
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));


//listen on 4000
app.listen(4000, () => {
  console.log('listening for requests on port 4000');
});