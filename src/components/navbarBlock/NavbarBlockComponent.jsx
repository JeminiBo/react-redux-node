import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login, logout } from '../../redux/registration/registrationActions.jsx';
import { bindActionCreators } from 'redux';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class Navigate extends React.Component {
  userVisionContent = () => {
    if (this.props.currentUser) {
      return (
        <Navbar inverse collapseOnSelect>
          <Navbar.Collapse>
            <Nav>
              <LinkContainer to="/">
                <NavItem>Home</NavItem>
              </LinkContainer>
              <LinkContainer to="/content">
                <NavItem>Content</NavItem>
              </LinkContainer>
            </Nav>
            <Nav pullRight>
              <LinkContainer to="/" onClick={this.props.logout}>
                <NavItem>Log Out</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
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
              <LinkContainer to="/">
                <NavItem>Home</NavItem>
              </LinkContainer>
            </Nav>
            <Nav pullRight>
              <LinkContainer to="/authorization">
                <NavItem>Sign In</NavItem>
              </LinkContainer>
              <LinkContainer to="/registration">
                <NavItem>Sign Up</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
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
