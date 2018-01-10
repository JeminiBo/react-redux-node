import React from 'react';
import { connect } from 'react-redux';

class HelloWorld extends React.Component {
  renderUserName = () => {
    if (this.props.currentUser) {
      return this.props.currentUser.userLogin;
    }
    return 'Stranger';
  }

  render() {
    return (
      <h1>Hi {this.renderUserName()}</h1>
    );
  }
}

function mapConnectToProps(state) {
  return {
    currentUser: state.registrationReducer.currentUser,
  };
}

export default connect(mapConnectToProps)(HelloWorld);
