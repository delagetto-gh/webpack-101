import join from 'lodash/join' // <-- webpack will see this JS module
//                               and will BUNDLE the js contents into
//                               the 'bundle.js' output js file

import '../styles/style.css' // <-- willl be picked dup by the
// MiniCssExtractPlugin.loader, 'css-loader'
// which will load css into a JS, then wil extract that into a physical
// .css asset file

import mushroom from '../assets/ck-yeo-ZyEnQoFp8RQ-unsplash.jpg'
// ^^ When you use the asset loader in webpack, you will import ^^
// a string value into your JS variable. That string holds the src value
// that you can use to refer to the paths to those images.

const createComponent = () => {
  const element = document.createElement('div')

  // Lodash, currently included via a script, is required for this line to work
  // Lodash is referenced by '_'.. Like how jQuery is ref'd by '$'
  const stringUsingLodashLib = join(['hello', 'from-oo', 'webpack'], ' ')

  element.innerHTML = stringUsingLodashLib

  return element
}

const componentToAdd = createComponent()
document.body.appendChild(componentToAdd)

// NEW BLOCK
function imageComponent () {
  const element = document.createElement('img')

  element.src = mushroom

  return element
}

document.body.appendChild(imageComponent())
