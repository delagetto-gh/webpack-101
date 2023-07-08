# Create React app from scratch using `webpack+babel+react+reactdom` (w/o `CRA` or template-engines)

The purposee of this repo is to learn and demo what is actually involved in creating a react app frm scratch, and to uncover what tools like `create-react-app` (CRA) do behind the scenes for us.

## Prblem with CRA and other template-enginge CLIs

CRA adds for you:
- Transpiler
- Bundler
(so there's les to learn. In fact, CRA will bundle+transpile+serve your app usnng just a single command `npm start`)

## So whats the bare min needed to actually create a react app?

3 packages:

- `react`
- `react-dom`
- `babel`

 + conceptually, we need a JavaScript Trannspiler, and a module bundler ^^

 Why do we need a _Transpiler_? 
 - React recommeds we use the latest ES6 synntax (lambda functions, class syntax etc) for rreact applications, however moost brossers don't _understand_ this JS syntax, donc we need a _traspilerr_ that will convert the modern es6 js code we write into annother (older) js that bosers fullly suport + undestand.


  Why do we need a _Module Bundler_? 
 -  a module bundle, takes a bunch of files of different types (such as JS, SCSS, CSS, HTML, IMAGES), and _bundles_ theem iinto a BUNDLE (appennds all the diifferent files, per file type.. into one large file.. ergo.. a _bundle.

 - They also manage for us, dependencies + depdency relationiships and help us load up module dependencies inn the correct order so it works when ferenced in html.

# Now.. for our app...

## Transpiler are we going to use?

`BABEL`

## Module Bundle are we going to use?

`WEBPACK`

-alts: GULP, BROWSFY

> `webpack` - This is the main engine of webpack, it understands everything related about how the code and files relate to one another, and how to bundle them into a single package.

> `webpack-cli` - This is the actual program we are going to run to trigger/interact with the core engine. It allows us to run webpack on our command line and generate a bundle. (think Docker engine and Docker-CLI ;) )

## MODULES 101: in JS & Webpack

> Modules in the webpack ecosystem act as a means for your code to communicate to webpack a list of exactly which pieces are needed.
> With this information, webpack can build a dependency graph of all the relationships in your project.


