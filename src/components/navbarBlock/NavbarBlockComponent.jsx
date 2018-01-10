import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login, logout } from '../../redux/registration/registrationActions.jsx';
import { bindActionCreators } from 'redux';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

class Navigate extends React.Component {
  userVisionContent = () => {
    if (this.props.currentUser) {
      return (
        <Navbar inverse collapseOnSelect>
          <Navbar.Collapse>
            <Nav>
              <NavItem>
                <Link to="/">Home</Link>
              </NavItem>
              <NavItem>
                <Link to="/content">Content</Link>
              </NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem>
                <Link to="/" onClick={this.props.logout}>Log Out</Link>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        /*<ul>
          <li> <Link to="/">Главная</Link></li>
          <li> <Link to="/content">Контент</Link></li>
          <li> <Link to="/" onClick={this.props.logout}>Выйти</Link></li>
        </ul>*/
      );
    } else {
      return (
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">MyApp</Link>
            </Navbar.Brand>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem>
                <Link to="/">Home</Link>
              </NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem>
                <Link to="/authorization">Sign In</Link>
              </NavItem>
              <NavItem>
                <Link to="/registration">Sign Up</Link>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
       /* <ul>
          <li> <Link to="/">Главная</Link></li>
          <li> <Link to="/authorization">Авторизация</Link></li>
          <li> <Link to="/registration">Регистрация</Link></li>
        </ul> */
      );
    }
  }
  render() {
    return (
      <header>
        {this.userVisionContent()}
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.registrationReducer.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({
    login,
    logout,
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigate);
