/* eslint-env detox/detox, mocha */

describe('Home Screen has buttons to Trainer and Pokemon screens', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('Button to Trainer screen is visible', async () => {
    await expect(element(by.id('trainerButton'))).toBeVisible();
  });

  it('Button to Pokemon screen is visible', async () => {
    await expect(element(by.id('pokemonButton'))).toBeVisible();
  });
})
