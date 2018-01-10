import { bindActionCreators } from 'redux';
import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../redux/registration/registrationActions.jsx';
import LoginForm from './LoginFormComponent';

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
