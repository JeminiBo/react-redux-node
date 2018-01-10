import React from 'react';
import { Button, Form, FormControl, FormGroup, Col, Row} from 'react-bootstrap';

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
      <Form horizontal>
        <FormGroup controlId="formHorizontalLogin">
          <br />
          <Row >
            <Col xs={3} xsOffset={4}>
              <Col xs={5} >
                <h3 className="loginInputText">Login:</h3>
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
                <h3 className="loginInputText">Password:</h3>
              </Col>
              <Col xs={7} >
                <FormControl value={this.state.password} onChange={this.handleChangePassword} />
              </Col>
            </Col>
          </Row>
        </FormGroup>

        <FormGroup>
          <Col xs={1} xsOffset={6} >
            <Button bsStyle="primary" bsSize="large" onClick={this.signIn.bind(this)}>Sign in</Button>
          </Col>
        </FormGroup>
      </Form>
      /* <div className="centered">
        <p>Логин</p>
        <input value={this.state.login} onChange={this.handleChangeLogin} />
        <p>Пароль</p>
        <input value={this.state.password} onChange={this.handleChangePassword} />
        <br />
        <Button bsStyle="primary" bsSize="large" onClick={this.signIn.bind(this)} >Авторизоваться</Button>
      </div> */
    );
  }
}

export default LoginForm;