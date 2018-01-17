401 JS --  Lab 31 Budget Tracker
===

* Simple budget tracker app that is build using React and Redux. Redux is used to manage state of the app, storing in single store. Category components are build with `id`, `name`, `timestamp` and `budget` props. 

## Code Style
* Javascript ES6, JSX


## Tech / framework used

* [npm package uuid](https://www.npmjs.com/package/uuid) - used to add unique ID
* Webpack
* React
* Redux
* Babel
* sass

## Installation and How To Use

  * Fork || clone this repo to you computer

  * Run `npm install`

  * To run webpack watch command type `npm run watch`. After build has been completed - webpack-dev-server will show provide URL where your project is hosted. Copy that address to your browser to view app features.
  
  * To run tests type `npm test` in your terminal 

## Features

### App Component
* contains `dashboard` route connected to `dashboard` component.

### Dashboard Component
* contains all categories that are created. Categories can also be deleted or updated. 

### CategoryForm Component
* contains form with two input field(name and budget) as well as button to `create category` or `update category`

### CategoryItem Component
* displays categories `name` and `budget` as well as `delete` button

### Licence
MIT © Pedja Josifovic401 JS 
