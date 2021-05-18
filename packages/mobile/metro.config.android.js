/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path')

module.exports = {
  watchFolders: [path.resolve(__dirname, '../../')],
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  server: {
    enhanceMiddleware: (middleware) => {
      return (req, res, next) => {
        // When an asset is imported outside the project root, it has wrong path on Android
        // So we fix the path to correct one
        if (
          /\/node_modules\/@react-navigation\/stack\/src\/views\/assets\/.+\.png\?.+$/.test(
            req.url,
          )
        ) {
          req.url = `/assets/../../node_modules/../${req.url}`
        }

        return middleware(req, res, next)
      }
    },
  },
}
