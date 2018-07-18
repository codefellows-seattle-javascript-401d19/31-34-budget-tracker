import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import Dashboard from '../dashboard';

class App extends React.Component{
  render(){
    return(
      <div>
        <BrowserRouter>
          <div>
            <h1>Welcome to the Budget Tracker</h1>
            <Route exact path = '/' component={Dashboard} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
