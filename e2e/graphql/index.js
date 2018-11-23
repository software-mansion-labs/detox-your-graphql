const express = require("express");
const { ApolloServer } = require("apollo-server-express");

const { resolvers } = require("./schema");
const { buildClientSchema } = require("graphql");
const introspectedSchema = require("./schemaExample.json");

const PORT = 8089;

function createServerWithMockedSchema(customMocks = {}) {
  const schema = buildClientSchema(introspectedSchema);

  const server = new ApolloServer({
    schema: schema,
    resolvers: resolvers,
    mocks: customMocks,
    playground: {
      endpoint: `http://localhost:${PORT}/graphql`
    }
  });
  return server;
}

let graphQLServerApp;
let httpServer;

function startHttpServer() {
  return new Promise(resolve => {
    httpServer = graphQLServerApp.listen(PORT, () => {
      resolve();
    });
  });
}

function stopHttpServer() {
  return new Promise(resolve => httpServer.close(() => resolve()));
}

async function startGraphQLServer(mock = {}) {
  if (httpServer) {
    console.warn("Tried to start HTTP server, when there's already one.");
    return;
  }

  graphQLServerApp = express();
  const server = createServerWithMockedSchema(mock);

  server.applyMiddleware({
    app: graphQLServerApp
  });

  // we want to wait for the server to start listening
  await startHttpServer();
}

async function stopGraphQLServer() {
  if (!httpServer) {
    console.warn("Tried to close null HTTP server.");
    return;
  }

  await stopHttpServer();
  httpServer = null;
  graphQLServerApp = null;
}

module.exports = {
  startGraphQLServer,
  stopGraphQLServer
};
