const TSEslint = require("@typescript-eslint/eslint-plugin");

module.exports = {
    parser: "babel-eslint",
    extends: [
        "google",
        "eslint:recommended",
        "plugin:flowtype/recommended",
        "plugin:react/recommended",
        "prettier",
        "prettier/flowtype",
        "prettier/react",
    ],
    plugins: ["flowtype", "prettier", "react", "filenames"],
    parserOptions: {
        ecmaVersion: 2016,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },
    env: {
        browser: true,
        es6: true,
        node: true,
        jest: true,
    },
    globals: {
        before: true,
        after: true,
        spyOn: true,
        __PATH_PREFIX__: true,
        __BASE_PATH__: true,
        __ASSET_PREFIX__: true,
    },
    rules: {
        "arrow-body-style": [
            "error",
            "as-needed",
            { requireReturnForObjectLiteral: true },
        ],
        "no-unused-expressions": [
            "error",
            {
                allowTaggedTemplates: true,
            },
        ],
        "no-unused-vars": [
            "warn",
            {
                varsIgnorePattern: "^_"
            }
        ],
        "consistent-return": ["error"],
        "filenames/match-regex": ["error", "^[a-z-\\d\\.]+$", true],
        "no-console": "off",
        "no-inner-declarations": "off",
        "prettier/prettier": "error",
        quotes: ["error", "double"],
        "react/display-name": "off",
        "react/jsx-key": "warn",
        "react/no-unescaped-entities": "off",
        "react/prop-types": "off",
        "require-jsdoc": "off",
        "valid-jsdoc": "off",
    },
    overrides: [{
        files: ["*.ts", "*.tsx"],
        parser: "@typescript-eslint/parser",
        plugins: ["@typescript-eslint/eslint-plugin"],
        rules: {
            ...TSEslint.configs.recommended.rules,
        },
    }, ],
    settings: {
        react: {
            version: "16.4.2",
        },
    },
}
