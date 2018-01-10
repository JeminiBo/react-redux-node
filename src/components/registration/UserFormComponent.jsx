import React from 'react';
import { Button, Form, FormControl, FormGroup, Col, Row} from 'react-bootstrap';

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
      <Form horizontal>
        <FormGroup controlId="formHorizontalFirstName">
          <br />
          <Row >
            <Col xs={3} xsOffset={4}>
              <Col xs={5} >
                <h4 className="loginInputText">FirstName:</h4>
              </Col>
              <Col xs={7} >
                <FormControl value={this.state.firstName} onChange={this.handleChangeFirstName} />
              </Col>
            </Col>
          </Row>
        </FormGroup>

        <FormGroup controlId="formHorizontalSecondName">
          <Row >
            <Col xs={3} xsOffset={4}>
              <Col xs={5} >
                <h4 className="loginInputText">SecondName:</h4>
              </Col>
              <Col xs={7} >
                <FormControl value={this.state.secondName} onChange={this.handleChangeSecondName} />
              </Col>
            </Col>
          </Row>
        </FormGroup>

        <FormGroup controlId="formHorizontalLogin">
          <Row >
            <Col xs={3} xsOffset={4}>
              <Col xs={5} >
                <h4 className="loginInputText">Login:</h4>
              </Col>
              <Col xs={7} >
                <FormControl value={this.state.login} onChange={this.handleChangeLogin} />
              </Col>
            </Col>
          </Row>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
          <Row >
            <Col xs={3} xsOffset={4}>
              <Col xs={5} >
                <h4 className="loginInputText">Password:</h4>
              </Col>
              <Col xs={7} >
                <FormControl value={this.state.password} onChange={this.handleChangePassword} />
              </Col>
            </Col>
          </Row>
        </FormGroup>

        <FormGroup>
          <Col xs={1} xsOffset={6} >
            <Button bsStyle="primary" bsSize="large" onClick={this.signUp.bind(this)}>Sign up</Button>
          </Col>
        </FormGroup>
      </Form>

      /* <div className="centered">
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
      </div> */
    );
  }
}

export default UserForm;