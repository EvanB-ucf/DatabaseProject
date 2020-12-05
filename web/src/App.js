import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

// Import our pages to one place for our router to redirect as needed
import LoginPage from './pages/loginPage';
import Register from './pages/register';
import HomePage from './pages/main';
import Add from './pages/add';
import Event from './pages/event';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path='/login' component={LoginPage} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/add' component={Add} />
            <Route exact path='/event' component={Event} />
            <Route exact path='/home' component={HomePage} />
            <Route exact path='/' component={HomePage} />
          </Switch>
        </Router>
      </div>
    );
  }
};

export default App;