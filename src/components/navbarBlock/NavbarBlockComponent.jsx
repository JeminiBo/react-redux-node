import React from 'react';
import {Link}  from 'react-router-dom';
import {connect} from 'react-redux';
import {login,logout} from '../../redux/registration/registrationActions.jsx'
import {bindActionCreators} from 'redux'



class Navigate extends React.Component{
    userVisionContent = () => {
        if(this.props.currentUser)
        {
            return(
            <ul>
                <li> <Link to="/">Главная</Link></li>
                <li> <Link to="/content">Контент</Link></li>
                <li> <Link to="/" onClick = {this.props.logout}>Выйти</Link></li>
            </ul> 
            )
        }
        else
        {
            return(
            <ul>
                <li> <Link to="/">Главная</Link></li>
                <li> <Link to="/authorization">Авторизация</Link></li>
                <li> <Link to="/registration">Регистрация</Link></li>
                
            </ul>)
        }
    }
    render(){
        return (
            <header>
                
                   {this.userVisionContent()}
                
            </header>
            )

    }
}

const mapStateToProps = (state) => ({
    currentUser: state.registrationReducer.currentUser,
});


const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({
        login,
        logout,
    }, dispatch)
});


export default connect(mapStateToProps,mapDispatchToProps)(Navigate);
