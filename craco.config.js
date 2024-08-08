const path = require('path');
const CracoAlias = require("craco-alias");

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    {
       plugin: CracoAlias,
       options: {
          source: "tsconfig",
          baseUrl: "./src",
          tsConfigPath: "./tsconfig.json"
       }
    }
 ]
};