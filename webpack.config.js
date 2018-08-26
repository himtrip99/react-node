var webpack = require("webpack");
var path = require("path");

module.exports = {
 entry: {
    app : "./public/app/App.js" 
  },
 output: {
   filename: "public/build/bundle.js",
   sourceMapFilename: "public/build/bundle.map"
 },
 devtool: '#source-map',
 module: {
   loaders: [
     {
       test: /\.es6$/,
       exclude: /(node_modules|bower_components)/,
       loader: 'babel-loader',
       query: {
         presets: ['react', 'es2015'] 
       }
     }
   ]
 },
	 resolve: {
   extensions: ['', '.js', '.es6']
 },
}