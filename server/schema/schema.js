const graphql = require('graphql');
const _ = require('lodash');
const Todo = require('../models/todos');


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

const Mutation = new GraphQLObjectType({
  name: "Mutations",
  fields: {
    addTodo: {
      type: TodoType,
      args: {
        name: { type: GraphQLString },
        details: { type: GraphQLString }
      },
      resolve(parent, args) {
        let todo = new Todo({
          name: args.name,
          details: args.details
        });
        return todo.save();
      }
    }
  }
});



const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    todo: {
      type: TodoType,
      args: {
        id: { type: GraphQLID }
      },

      //resolve
    }
  }
});



module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});