import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from '../dashboard';

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <div>
          <Route exact path='/' component={Dashboard} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
