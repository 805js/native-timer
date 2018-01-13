module.exports = {
  entry: ["./src/index.js"],
  output: {
    filename: "./src/bundle.js"
  },
  module: {

    loaders: [
      {
        test: [/\.js$/, /\.es6$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js']
  }
};


// var debug = process.env.NODE_ENV !== "production";
// var webpack = require('webpack');
//
// module.exports = {
//   context: __dirname,
//   devtool: debug ? "inline-sourcemap" : null,
//   entry: "./src/index.js",
//   output: {
//     path: __dirname + "/src",
//     filename: "bundle.min.js"
//   },
//   plugins: debug ? [] : [
//     // new webpack.optimize.DedupePlugin(),
//     // new webpack.optimize.OccurenceOrderPlugin(),
//     // new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
//   ],
// };