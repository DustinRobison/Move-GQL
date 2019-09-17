const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const fs = require("fs");
const { importSchema } = require("graphql-import");

const typeDefs = importSchema(__dirname + "/schema.graphql");
const resolvers = require("./resolvers/Resolvers");

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
