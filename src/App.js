
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Create from './components/create.component';
import Edit from './components/edit.component';
import Index from './components/index.component';
import login from './components/login.component';
import signup from './components/signup';
import homepage from './components/homepage';
class App extends Component {
  render() {
    return (
      <Router>
      
          <Switch>
              <Route exact path='/' component={ homepage } />
              <Route exact path='/create' component={ Create } />
              <Route path='/edit/:id' component={ Edit } />
              <Route path='/index' component={ Index } />
              <Route path='/login' component={ login } />
              <Route path='/signup' component={ signup } />
          </Switch>
        
      </Router>
    );
  }
}

export default App;
