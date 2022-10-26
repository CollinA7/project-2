module.exports = {
<<<<<<< HEAD
    env: {
        browser: true,
        es2021: true,
    },
    extends: 'google',
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {},
}
=======
  "semi": false,
  "overrides": [
    {
      "files": "*.test.js",
      "options": {
        "semi": true
      }
    },
    {
      "files": ["*.html", "legacy/**/*.js"],
      "options": {
        "tabWidth": 4
      }
    }
  ]
}
>>>>>>> 363578d0af2fb687d52dee71fa8fe5111535dd06
