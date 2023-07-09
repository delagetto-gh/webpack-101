const path = require('path')

// html webpack plugin takes our htmll pages and bundle them
// and place them into our 'dist' folder, so we dont manually need to
// copy and refernc them
const HtmlWebpackPlugin = require('html-webpack-plugin')

const currentWorkingDirectory = __dirname
const distDirectory = path.resolve(currentWorkingDirectory, 'dist')

module.exports = {

  // mode:  <-- This determines what kind of extra processing is done to your output file.
  // mode: none - means no minifcatio or optimisatinos are done
  //              so we can see the output mmore clearly
  mode: 'none', // [production], [development]

  // entry: <-- starting point/file of our app for webpack to  build dependecy graph
  entry: {
    main: './src/script.js'
  },

  // output <-- name and location of wherre webpack wll generate the fil after
  //           all 'bundling' is done. THIS FILE, is what our index.html will reference
  output: {
    path: distDirectory,
    filename: 'bundle.js',
    clean: true // <-- instructs webpack to clear out the path ^^ before re-bundling
  },

  // module (loaders)
  module: {

    rules: [{
      test: /\.css$/, // <<-- test for fiiles matchcig this REGEX
      use: ['style-loader', 'css-loader'] // <-- using loaders
    }]
  },

  // plugins
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html', // <-- the output (bundled) file name
      template: './src/index.html' // <-- use our existing spa index.html as a tempate to copy from
    })
  ],

  devServer: {
    static: './dist', // <-- web-serve the files located here
    port: 14409, // <-- run the server on this port, (loccalhost)
    open: true // <-- open window to server url using the default browser
  }
}
