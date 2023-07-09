import join from 'lodash/join' // <-- webpack will see this JS module
//                               and will BUNDLE the js contents into
//                               the 'bundle.js' output js file

import stylesheet from './style.css'

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
