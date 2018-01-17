import { signUp, signIn, userIn, logoutUser } from '../../api/index.js';
import Notifications from 'react-notification-system-redux';

export const registrationUser = (userName, userLogin, pass) => dispatch => {
  signUp(userName, userLogin, pass).then((res) => dispatch({
    type: 'ADD_USER',
    payload: {
      userName,
      userLogin,
      pass
    }
  }))
    .catch((err) => {
      dispatch({
        type: 'ADD_USER_REJECTED'
      });
    });
};

export const login = (userLogin, pass) => dispatch => {
  signIn(userLogin, pass)
    .then((res) => {
      dispatch({
        type: 'LOGIN',
        payload: {
          userLogin: res.login,
          pass: res.password
        }
      });
    })
    .catch((err) => {
      dispatch(Notifications.error({
        title: 'Ошибка',
        message: 'Пользователь не существует',
      }));
    });
};

export const getUser = () => dispatch => {
  userIn().then((res) => dispatch({
    type: 'SET_STATE',
    payload: res
  }))
    .catch((err) => {
      dispatch({
        type: 'SET_STATE_REJECTED'
      });
    });
};

export const logout = function logout() {
  logoutUser();
  return {
    type: 'LOGOUT'
  };
};
