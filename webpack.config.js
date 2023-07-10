const path = require('path')

const webpack = require('webpack') // see https://stackoverflow.com/a/64553486

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
    main: './src/js/index.js' // <-- Key = semantic name given to thhe bundlee / chunk.
    //                             this means we have have MULTIPLE bundle/entry points
    //                          imagine if we have one for our prop code, and anotherr entry point fr VENDOR stuff/3rrd party stuff so
    // vendor: './lib/vendorIndex.js'
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
    },
    {
      test: /\.(js|jsx)$/,
      // Resolving can be configured on module level.
      // All applied resolve options get deeply merged with higher level resolve.
      resolve: {
        // Ask webpack to automatically resolve certain extensions.
        // which is what enables users to leave off the extension when importing:
        // ie. import MyComponent from '../path/to/MyComponent' (imagine the file is MyComponent.jsx)
        extensions: ['.js', '.jsx']
      },
      exclude: '/node_modules/',
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react']
        }
      }
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
    }),
    new webpack.ProvidePlugin({ // see https://stackoverflow.com/a/64553486
      process: 'process/browser'
    })
  ],

  // <-- dev server config (need `webpack-dev-server` installed for this to work)
  devServer: {
    static: './dist', // <-- web-serve the files located here
    port: 14409, // <-- run the server on this port, (loccalhost)
    open: true // <-- open window to server url using the default browser
  }
}
