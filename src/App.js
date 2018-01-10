import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import RegistrationComponent from './components/registration/RegistrationComponent.jsx';
import LoginComponent from './components/login/LoginComponent.jsx';
import NavbarBlock from './components/navbarBlock/NavbarBlockComponent.jsx';
import Content from './components/content/content.jsx';
import './App.css';
import Home from './components/homePage/Home';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => rest.isAutorized() === null
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/' }} />
      }
    />
  );
};

class App extends React.Component {
  isAutorized = () => {
    return this.props.currentUser;
  }

  render() {
    return (
      <Router>
        <div>
          <NavbarBlock />
          <Switch>
            <PrivateRoute exact path="/authorization" component={LoginComponent} isAutorized={this.isAutorized} />
            <PrivateRoute exact path="/registration" component={RegistrationComponent} isAutorized={this.isAutorized} />
            <Route exact path="/content" component={Content} />
            <Route exact path="/" component={Home} />
            <Route path="*" render={() => (<Redirect to="/" />)} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.registrationReducer.currentUser,
});

export default connect(mapStateToProps, null)(App);
