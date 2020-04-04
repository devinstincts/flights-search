module.exports = {
    "extends": "airbnb",
    "env": {
        "jest": true,
        "browser": true,
    },
    "globals": {
        "document": false,
    },
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    },
    "parser": "babel-eslint",
    "overrides": [
        {
            "files": [
                "**/*.spec.js",
                "**/*.spec.jsx"
            ],
            "env": {
                "jest": true
            }
        }
    ]
};