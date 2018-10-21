const path = require('path');

module.exports = {
  mode: 'development',
    
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
            'style-loader',
            'css-loader',
            'sass-loader'
        ]
    }]
  },
  devtool: 'cheap-module-eval-source-map',
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
};
