import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { registrationUser } from '../../redux/registration/registrationActions.jsx';
import { bindActionCreators } from 'redux';

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      secondName: '',
      login: '',
      password: ''
    };

    this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
    this.handleChangeSecondName = this.handleChangeSecondName.bind(this);
    this.handleChangeLogin = this.handleChangeLogin.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleChangeFirstName(event) {
    this.setState({ firstName: event.target.value });
  }

  handleChangeSecondName(event) {
    this.setState({ secondName: event.target.value });
  }

  handleChangeLogin(event) {
    this.setState({ login: event.target.value });
  }

  handleChangePassword(event) {
    this.setState({ password: event.target.value });
  }

  signUp() {
    return this.props.registrationUser(this.state.firstName, this.state.login, this.state.password);
  }

  render() {
    return (
      <div className="centered">
        <p>Имя</p>
        <input value={this.state.firstName} onChange={this.handleChangeFirstName} />
        <p>Фамилия</p>
        <input value={this.state.secondName} onChange={this.handleChangeSecondName} />
        <p>Логин</p>
        <input value={this.state.login} onChange={this.handleChangeLogin} />
        <p>Пароль</p>
        <input value={this.state.password} onChange={this.handleChangePassword} />
        <br />
        <Button bsStyle="primary" bsSize="large" onClick={this.signUp.bind(this)} >Зарегистрироваться</Button>
      </div>
    );
  }
}

class RegistrationComponent extends React.Component {
  render() {
    return (
      <div>
        <UserForm registrationUser={this.props.registrationUser} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.registrationReducer.users,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({
    registrationUser,
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationComponent);
