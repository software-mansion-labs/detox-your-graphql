const { GraphQLScalarType } = require("graphql");
const { Kind } = require("graphql/language");
const { gql } = require("apollo-server-express");

// schema generated from these types definitions and resolvers is in schemaExample.json
const schemaString = gql`
  scalar Date

  enum PokemonType {
    Normal
    Fire
    Water
    Grass
  }

  type Query {
    trainer: Trainer
    myPokemon: Pokemon
  }

  type Trainer {
    id: Int
    name: String
  }

  type Pokemon {
    id: Int
    name: String
    type: PokemonType
    level: Int
    catchDate: Date
  }
`;

const resolvers = {
  Date: new GraphQLScalarType({
    name: "Date",
    description: "Date custom scalar type",
    parseValue(value) {
      return new Date(value); // value from the client
    },
    serialize(value) {
      return value.getTime(); // value sent to the client
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return new Date(ast.value); // ast value is always in string format
      }
      return null;
    }
  })
};

module.exports = {
  schemaString,
  resolvers
};
