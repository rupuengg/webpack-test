module.exports = {
  // define entry point
  entry: './assets/app.js',

  // define output point
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },

  // Module
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: [
            'es2015'
          ]
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  }
};
