import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import store from './redux/store/index';
import RegistrationComponent from './components/registration/RegistrationComponent.jsx';
import LoginComponent from './components/login/LoginComponent.jsx';
import NavbarBlock from './components/navbarBlock/NavbarBlockComponent.jsx';
import Content from './components/content/content.jsx';
import './App.css';
import Home from './components/homePage/Home';
import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <NavbarBlock />
            <Switch>
              <Route exact path="/authorization" component={LoginComponent} />
              <Route exact path="/registration" component={RegistrationComponent} />
              <Route exact path="/content" component={Content} />
              <Route exact path="/" component={Home} />
              <Route path="*" render={() => (<Redirect to="/" />)} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
