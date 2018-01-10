import React from 'react';
import { Button } from 'react-bootstrap';

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
    this.signUp = this.signUp.bind(this);
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
    const name = `${this.state.firstName}  ${this.state.secondName}`;
    const login = this.state.login;
    const password = this.state.password;
    this.setState({
      firstName: '',
      secondName: '',
      login: '',
      password: ''
    });

    return this.props.registrationUser(name, login, password);
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
        <Button bsStyle="primary" bsSize="large" onClick={this.signUp} >Зарегистрироваться</Button>
      </div>
    );
  }
}

export default UserForm;