/* eslint-env detox/detox, mocha */
const { defaultPokemon, maxLvlPokemon } = require("../graphql/mocks/pokemon");
const { date } = require("../graphql/mocks/scalars");

const { startGraphQLServer, stopGraphQLServer } = require("../graphql");

describe("Test Pokemon screen", () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  afterEach(async () => {
    await stopGraphQLServer();
  });

  it("Display MaxLvl if the pokemon has maximum level.", async () => {
    await startGraphQLServer({ ...maxLvlPokemon, ...date });
    await expect(element(by.id("pokemonButton"))).toBeVisible();
    await element(by.id("pokemonButton")).tap();
    await expect(element(by.text("Level: MaxLvl"))).toBeVisible();
  });

  it("Display level if the pokemon does not have maximum level.", async () => {
    await startGraphQLServer({ ...defaultPokemon, ...date });
    await expect(element(by.id("pokemonButton"))).toBeVisible();
    await element(by.id("pokemonButton")).tap();
    await expect(element(by.text("Level: 10"))).toBeVisible();
  });
});
