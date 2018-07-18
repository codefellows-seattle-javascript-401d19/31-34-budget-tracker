import React from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import Dashboard from '../dashboard/index';

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <div>
            <nav>
              <Link to='/'> Home </Link>
            </nav>
            <Route exact path='/' component={Dashboard} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;