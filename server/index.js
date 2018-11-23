const { startGraphQLServer } = require("../e2e/graphql/index");

const { defaultPokemon } = require("../e2e/graphql/mocks/pokemon");
const { defaultTrainer } = require("../e2e/graphql/mocks/trainer");
const { date, defaultString } = require("../e2e/graphql/mocks/scalars");

const customMocks = {
  ...date,
  ...defaultString,
  ...defaultPokemon,
  ...defaultTrainer
};

// start mocked graphQL server without running Detox - helpful for testing
async function start() {
  await startGraphQLServer(customMocks);
}

start();
