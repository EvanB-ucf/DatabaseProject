import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

// Import our pages to one place for our router to redirect as needed
import LoginPage from './pages/loginPage.jsx';
import Logout from './pages/logout.jsx';
import Register from './pages/register.jsx';
import HomePage from './pages/main.jsx';
import Add from './pages/add.jsx';
import Event from './pages/event.jsx';
import CreateEvent from './pages/createEvent.jsx';
import SearchEvent from './pages/search.jsx';
import SearchUsername from './pages/searchUser.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path='/login' component={LoginPage} />
            <Route exact path='/logout' component={Logout} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/add' component={Add} />
            <Route exact path='/event' component={Event} />
            <Route exact path='/home' component={HomePage} />
            <Route exact path='/' component={HomePage} />
            <Route exact path='/create' component={CreateEvent} />
            <Route exact path='/search' component={SearchEvent} />
            <Route exact path='/searchuser' component={SearchUsername} />
          </Switch>
        </Router>
      </div>
    );
  }
};

export default App;