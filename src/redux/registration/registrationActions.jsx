import { signUp, signIn, userIn, logoutUser } from '../../api/index.js';

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
      // alert(err.message);
    });
};

export const login = (userLogin, pass) => dispatch => {
  signIn(userLogin, pass).then((res) => dispatch({
    type: 'LOGIN',
    payload: {
      userLogin: res.login,
      pass: res.password
    }
  }))
    .catch((err) => {
      // alert(err.message);
    });
};

export const getUser = () => dispatch => {
  userIn().then((res) => dispatch({
    type: 'SET_STATE',
    payload: res
  }))
    .catch((err) => {
      // alert(err.message);
    });
};

export const logout = function logout() {
  logoutUser();
  return {
    type: 'LOGOUT'
  };
};
