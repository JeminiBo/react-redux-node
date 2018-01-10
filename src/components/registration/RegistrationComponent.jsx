import { bindActionCreators } from 'redux';
import React from 'react';
import { connect } from 'react-redux';
import { registrationUser } from '../../redux/registration/registrationActions.jsx';
import UserForm from './UserFormComponent';

class RegistrationComponent extends React.PureComponent {
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
