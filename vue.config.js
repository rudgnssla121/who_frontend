const path = require('path');

module.exports = {
  lintOnSave: false,
  "transpileDependencies": [
    "vuetify"
  ],
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src/')
      }
    }
  },

  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000/api',
            changeOrigin: true,
            pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  outputDir: '../who_backend/public',
}

