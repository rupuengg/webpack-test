# Webpack-test
## This application is used to create for understanding of webpack
###### Initialize NPM
> Run **npm init**
###### Intalling Webpack and Bundling js Files
> Run **npm install webpack --save-dev**
###### Make Webpack config file
`module.exports = {
  // define entry point
  entry: './assets/js/app.js',

  // define output point
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  }
};`
