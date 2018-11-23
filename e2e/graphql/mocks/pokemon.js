// const randomLevel = () => Math.floor(Math.random() * 29) + 1;

const defaultPokemon = {
  Pokemon: () => ({
    level: 10
  })
};

const maxLvlPokemon = {
  Pokemon: () => ({
    level: 30
  })
};

module.exports = {
  defaultPokemon,
  maxLvlPokemon
};
