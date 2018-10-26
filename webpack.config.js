const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
  const isProduction = env === 'production';
  console.log('env', env);
  
  return {
    mode: 'production',
    
  entry: './src/app.js',
    
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public/scripts/'),
    publicPath: 'public/scripts/'
  },
  
  watch: true,
    
  watchOptions: {
    ignored: /node_modules/
  },
    
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }, {
        test: /\.s?css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                // you can specify a publicPath here
                // by default it use publicPath in webpackOptions.output
                // publicPath: '../'
              }
            }, {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            }, {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }              
            }
            // "css-loader",
            // "sass-loader"
          ]
    }]
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],
  devtool: isProduction ? 'source-map' : 'inline-source-map',
  devServer: {
      contentBase: path.join(__dirname, 'public'),
      open: false,
      watchContentBase: true,
      watchOptions: {
          poll: true
        },
      inline: false,
      hot: false,
      historyApiFallback: true
  }
  }
}

