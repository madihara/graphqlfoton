const graphql = require('graphql');
const _ = require('lodash');


//de-structure to get var from graphql
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
} = graphql

//dummy data
var todos = [
  { name: 'walk the dog', details: '30 minute walk', id: '1' },
  { name: 'make dinner', details: 'spaghetti', id: '2' },
  { name: 'wash the car', details: 'suds it up', id: '3' },
];

//define new type
const TodoType = new GraphQLObjectType({
  name: 'Todo',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    details: { type: GraphQLString }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    todo: {
      type: TodoType,
      args: {
        id: { type: GraphQLID }
      },
      resolve(parent, args) {
        //get data from DB
        return _.find(todos, { id: args.id })
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});