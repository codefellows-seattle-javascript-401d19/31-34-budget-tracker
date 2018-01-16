# Code Fellows: Seattle 401 JavaScript - 401d19

## Lab 31: Budget Tracker

![Budget Tracker Overview](./assets/todo-list-overview.png)

### Author: 
Catherine Looper

### Motivation

In this project, I built a frontend Todo List application containing a Home Page with a brief description about the application, and a Dashboard page where users can create their own Todo List. To create a Todo List, users can enter a note title and description and click `Create`. Users can edit any note by clicking the corresponding `Edit` button. This will take the user to a modal editing view where users can make edits to their notes. If a user would like to save the edit, they may click the `Update` button. If the user does not want to save their edit, they can click the `close` button, which will take the user back to their Dashboard. Users also have the ability to remove any of their created notes by clicking the `Delete` button next to the note they would like to remove. 

In this application, I configured webpack to compile JavaScript and SASS into a bundle and configured babel to transpile JSX and ES6 to ES5 JavaScript. I was able to create and render React components to the DOM, add event listeners to React components, and update React component state.

This application uses localStorage for persistence!

### Build

<!-- ![Todo List Tree](./assets/todolist-tree.png) -->

#### Sample Note View:
![Sample Notes](./assets/example-notes.png)

#### Modal Update Note View:

![Sample Modal Update View](./assets/modal-view.png)

### Limitations

To use this app - it is assumed that the user has familiarity with the tech and frameworks listed below.

### Code Style

Standard JavaScript with ES6, SASS, CSS, HTML, React

### Tech/Framework Used

* babel-core
* babel-loader
* babel-plugin-transform-object-rest-spread
* babel-preset-env
* babel-preset-react
* css-loader
* eslint-plugin-react
* extract-text-webpack-plugin
* html-webpack-plugin
* node-sass
* react
* react-dom
* react-redux
* react-router-dom
* redux
* resolve-url-loader
* sass-loader
* superagent
* uuid
* webpack
* webpack-dev-server
* eslint

### How to use?

* Step 1. Fork and Clone the Repository.
* Step 2. `npm install`
* Step 3. `npm run watch`
* Step 4. You should now be able to visit: `http://localhost:8080/` to view the application
* Step 5. The loading/home page will be displayed - to access the Todo list - click on the nav bar item `Dashboard`.
* Step 6. To create a new note, enter a title and a description and click the `Create` button. 
* Step 7. Notes can be edited by clicking the `Edit` button. Once the note is edited, click `Update` to save or click `close` if you do not want to save your edits.
* Step 8. Notes can be removed by clicking the corresponding `Delete` button.

### Credits

* Code Fellows

### License

MIT © Catherine Looper

