/* eslint-disable @typescript-eslint/no-var-requires */
// next.config.js
const withPlugins = require("next-compose-plugins")
const optimizedImages = require("next-optimized-images")
const path = require("path")

module.exports = withPlugins(
  [
    [
      optimizedImages,
      {
        optimizeImagesInDev: true,
      },
    ],
  ],
  {
    webpack(config) {
      config.resolve.alias.covers = path.join(__dirname, "covers")
      return config
    },
  }
)
