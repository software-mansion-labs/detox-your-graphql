/* eslint-env detox/detox, mocha */
const { defaultTrainer } = require("../graphql/mocks/trainer");

const { startGraphQLServer, stopGraphQLServer } = require("../graphql");

describe("Test trainer screen", () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  afterEach(async () => {
    await stopGraphQLServer();
  });

  it("Button to Trainer screen is visible", async () => {
    await startGraphQLServer(defaultTrainer);
    await expect(element(by.id("trainerButton"))).toBeVisible();
    await element(by.id("trainerButton")).tap();
    await expect(element(by.text("Gary Doe"))).toBeVisible();
  });
});
