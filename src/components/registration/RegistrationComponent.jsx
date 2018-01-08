import React from 'react'
import {connect} from 'react-redux';
import {Button} from "react-bootstrap"
import {registrationUser} from '../../redux/registration/registrationActions.jsx'
import {bindActionCreators} from 'redux'

class UserForm extends React.Component {
    constructor(props) {
        super(props);
    
        

    }

    signUp() {
        if (this.refs.userLogin.value !== '') {
            var itemText = this.refs.userFirstName.value + ' ' + this.refs.userSecondName.value;
            var loginText = this.refs.userLogin.value;
            var passText = this.refs.userPass.value;
            this.refs.userFirstName.value = '';
            this.refs.userSecondName.value = '';
            this.refs.userLogin.value = '';
            this.refs.userPass.value = '';

            return this.props.registrationUser(itemText, loginText, passText);
        }
    }
  

    render() {
        return (
            <div className = "centered">
            <p>Имя</p>
            <input ref="userFirstName"   />
            <p>Фамилия</p>
            <input ref="userSecondName" />
            <p>Логин</p>
            <input ref="userLogin" />
            <p>Пароль</p>
            <input ref="userPass" />
            <br></br>  
                <Button  bsStyle="primary" bsSize="large" onClick = {this.signUp.bind(this)} >Зарегистрироваться</Button>
            </div>
        )
    }
}


class RegistrationComponent extends React.Component {
    render() {
        
        return (
            <div>
                
                <UserForm registrationUser={this.props.registrationUser} />
            </div>
        )
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
