const graphql = require('graphql');
const _ = require('lodash');


//de-structure to get var from graphql
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
} = graphql

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