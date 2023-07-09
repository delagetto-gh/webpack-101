const path = require('path')

// html webpack plugin takes our htmll pages and bundle them
// and place them into our 'dist' folder, so we dont manually need to
// copy and refernc them
const HtmlWebpackPlugin = require('html-webpack-plugin')

// extracts your CSS into separate files.
// It generates a CSS file for each JS file that imports CSS.
// **Do not use style-loader and mini-css-extract-plugin together.**
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const currentWorkingDirectory = __dirname
const distDirectory = path.resolve(currentWorkingDirectory, 'dist')

module.exports = {

  // mode:  <-- This determines what kind of extra processing is done to your output file.
  // mode: none - means no minifcatio or optimisatinos are done
  //              so we can see the output mmore clearly
  mode: 'none', // [production], [development]

  // entry: <-- starting point/file of our app for webpack to  build dependecy graph
  entry: {
    main: './src/js/script.js', // <-- Key = semantic name given to thhe bundlee / chunk.
    //                             this means we have have MULTIPLE bundle/entry points
    //                          imagine if we have one for our prop code, and anotherr entry point fr VENDOR stuff/3rrd party stuff so
    // vendor: './lib/vendorIndex.js'
    vendor: './src/js/vendor.js'
  },

  // output <-- name and location of wherre webpack wll generate the fil after
  //           all 'bundling' is done. THIS FILE, is what our index.html will reference
  output: {
    path: distDirectory,
    filename: 'js/[name]-bundle.js', // < <-- the [contenthash] is an example of webpacks 'substituioos',  ainly used for CACHE BUSTING
    clean: true // <-- instructs webpack to clear out the path ^^ before re-bundling
  },

  // module (loaders)
  module: {

    rules: [{
      test: /\.css$/, // <<-- test for fiiles matchcig this REGEX
      use: [MiniCssExtractPlugin.loader, 'css-loader'] // <-- using loaders
    },
    {
      test: /\.(png|svg|jpg|jpeg|gif)/,
      type: 'asset/resource',
      generator: {
        filename: 'assets/baba[name]-[hash][ext]'
      }
    },
    {
      test: /\.html$/,
      use: ['html-loader']
    }]
  },

  // plugins
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html', // <-- the output (bundled) file name
      template: './src/index.html' // <-- use our existing spa index.html as a tempate to copy from
    }),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].css' // <-- the output (bundled) file name
    })
  ],

  // <-- dev server config (need `webpack-dev-server` installed for this to work)
  devServer: {
    static: './dist', // <-- web-serve the files located here
    port: 14409, // <-- run the server on this port, (loccalhost)
    open: true // <-- open window to server url using the default browser
  }
}
