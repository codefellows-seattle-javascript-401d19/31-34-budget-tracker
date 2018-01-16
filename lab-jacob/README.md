# 26-Lab Front-end tooling React

After installing the dependecies necessary for using React, Babel and webpack creating that actual app needed also installing cowsay. 

To add in the ability to change the cow the dynamic state from the constructor was added to the property of the cowsay function for
 ```
cow : ''
 ``` 

then wrote a function that would handle the state change onclick of the button.

>  changeCowState(){
    (this.setState({animal : say.DRAGON})) ? this.setState({animal : say.DEFAULT}) : this.setState({animal : say.DRAGON}) 
  }


* **List of Dependecies** 

 ```
    "babel-core": "^6.26.0",
    "babel-loader": "^7.1.2",
    "babel-plugin-transform-object-rest-spread": "^6.26.0",
    "babel-preset-env": "^1.6.1",
    "babel-preset-react": "^6.24.1",
    "cowsay": "^1.2.1",
    "css-loader": "^0.28.8",
    "extract-text-webpack-plugin": "^3.0.2",
    "faker": "^4.1.0",
    "html-webpack-plugin": "^2.30.1",
    "node-sass": "^4.7.2",
    "react": "^16.2.0",
    "react-dom": "^16.2.0",
    "resolve-url-loader": "^2.2.1",
    "sass-loader": "^6.0.6",
    "webpack": "^3.10.0",
    "webpack-dev-server": "^2.10.0"
 ```
## Built With
* **JavaScript**
* **React**
* **Babel**
* **

## Authors

* **Jacob Evans**

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

N/A