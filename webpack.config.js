const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

/***** VARIABLES CONFIG *****/
const entryConf = './src/index.js'

const outputConf = {
  path: path.resolve(__dirname, 'dist'),
  filename: 'index_build.js',
  publicPath: '/dist'
}

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});
/***** /VARIABLES CONFIG *****/

module.exports = {
    resolve: {
        extensions: ['.js','.jsx']
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    },
    plugins: [htmlPlugin]
};