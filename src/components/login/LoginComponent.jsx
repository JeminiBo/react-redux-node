import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { login } from '../../redux/registration/registrationActions.jsx';
import { bindActionCreators } from 'redux';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: ''
    };
    this.handleChangeLogin = this.handleChangeLogin.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleChangeLogin(event) {
    this.setState({ login: event.target.value });
  }

  handleChangePassword(event) {
    this.setState({ password: event.target.value });
  }

  signIn() {
    return this.props.login(this.state.login, this.state.password);
  }

  render() {
    return (
      <div className="centered">
        <p>Логин</p>
        <input value={this.state.login} onChange={this.handleChangeLogin} />
        <p>Пароль</p>
        <input value={this.state.password} onChange={this.handleChangePassword} />
        <br />
        <Button bsStyle="primary" bsSize="large" onClick={this.signIn.bind(this)} >Авторизоваться</Button>
      </div>
    );
  }
}

class LoginComponent extends React.Component {
  componentDidUpdate() {
    if (this.props.currentUser) {
      this.props.history.push('/');
    }
  }

  render() {
    return (
      <div>
        <LoginForm login={this.props.login} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.registrationReducer.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({
    login,
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
