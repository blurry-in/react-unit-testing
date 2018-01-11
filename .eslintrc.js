module.exports = {
    "extends": "airbnb",
    "globals": {
        "document": true,
        "fetch": true,
        "describe": true,
        "it": true,
        "beforeEach": true,
        "describe": true,
        "expect": true,
        "beforeAll": true,
        "jest": true,
    },
    "rules": {
      "react/jsx-max-props-per-line": ["error", { "maximum": 1, "when": "always" }],
      'react/jsx-closing-bracket-location': ["error", {selfClosing: 'props-aligned', nonEmpty: 'props-aligned'}],
    },
};
