module.exports = {
    "parser": "babel-eslint",
    "extends": ["eslint:recommended", "plugin:react/recommended"],
    "plugins": ["react", "react-native"],
    "env": { "es6": true },
    "rules": {
      "no-console": "off",
      "react/prop-types": 0,
      "indent": [2, 2]
    },
    "globals": {
      "require": true,
      "console": true,
      "fetch": true,
      // detox
      "device": true,
      "expect": true,
      "element": true,
      "by": true,
    },
    "settings": {
      "react": {
        "version": "16",
      }
    },
    "parserOptions": {
      "ecmaFeatures": {
        "jsx": true
      }
    }
  };
