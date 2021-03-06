import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import RegistrationComponent from './components/registration/RegistrationComponent.jsx';
import LoginComponent from './components/login/LoginComponent.jsx';
import NavbarBlock from './components/navbarBlock/NavbarBlockComponent.jsx';
import Content from './components/content/content.jsx';
import './App.css';
import Home from './components/homePage/Home';
import { connect } from 'react-redux';
import { getUser } from './redux/registration/registrationActions';
import { bindActionCreators } from 'redux';
import NotificationComponent from './components/notifications/NotificationComponent';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => rest.isAutorized() === null
        ? <div><NavbarBlock /><Component {...props} /></div>
        : <Redirect to={{ pathname: '/' }} />
      }
    />
  );
};

const CustomRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => <div><NavbarBlock /><Component {...props} /></div>}
    />
  );
};

class App extends React.Component {
  componentWillMount() {
    this.props.getUser();
  }

  isAutorized = () => {
    return this.props.currentUser;
  }

  render() {
    return (
      <Router>
        <div>
          <NotificationComponent />
          <Switch>
            <PrivateRoute exact path="/authorization" component={LoginComponent} isAutorized={this.isAutorized} />
            <PrivateRoute exact path="/registration" component={RegistrationComponent} isAutorized={this.isAutorized} />
            <CustomRoute exact path="/content" component={Content} />
            <CustomRoute exact path="/" component={Home} />
            <CustomRoute path="*" render={() => (<Redirect to="/" />)} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.registrationReducer.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({
    getUser
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
