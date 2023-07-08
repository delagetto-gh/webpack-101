import join from "lodash/join"; //<-- webpack will see this JS module
//                               and will BUNDLE the js contents into
//                               the 'bundle.js' output js file

const createComponent = () => {
    const element = document.createElement("div");

    // Lodash, currently included via a script, is required for this line to work
    // Lodash is referenced by '_'.. Like how jQuery is ref'd by '$'
    const stringUsingLodashLib = join(["hello", "from", "webpack"], " ");

    element.innerHTML = stringUsingLodashLib;

    return element;
}

const componentToAdd = createComponent();

document.body.appendChild(componentToAdd);