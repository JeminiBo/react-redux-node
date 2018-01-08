import React from 'react';
import { connect } from 'react-redux';
import {Button} from "react-bootstrap"
import {login} from '../../redux/registration/registrationActions.jsx'
import {bindActionCreators} from 'redux'

class LoginForm extends React.Component {
   
    
    logOn() {
        if (this.refs.userLogin.value !== ''){
            var loginText = this.refs.userLogin.value;
            var passText = this.refs.userPass.value;
            this.refs.userLogin.value = '';
            this.refs.userPass.value = '';
            
            return this.props.login(loginText, passText);
        }
        
    }
   

    render() {
        return (
            <div className = "centered">
      
            
            <p>Логин</p>
            <input ref='userLogin' />
            <p>Пароль</p>
            <input ref='userPass'  />
            <br></br>   
                <Button  bsStyle="primary" bsSize="large" onClick = {this.logOn.bind(this)} >Авторизоваться</Button>
            </div>
        )
    }

}

class LoginComponent extends React.Component {

    componentDidUpdate(){
        if(this.props.currentUser)
        {
            this.props.history.push("/")
        }
    }

    render() {
        return (
            <div>
                
                <LoginForm login={this.props.login} />
            </div>
        )
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
