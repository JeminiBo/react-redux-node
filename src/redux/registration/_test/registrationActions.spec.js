/*const apiActions = require('inject-loader!../registrationActions.jsx');

describe('Test actions: ', function () {
  beforeEach(function () {
    this.signUp = () => {
      return new Promise((resolve) => {
        resolve();
      });
    }
    this.signIn = (login, password) => {
      let res = {
        login,
        password
      }
      return new Promise((resolve) => {
        resolve(res);
      });

    }
    this.userIn = () => {
      let res = {
        login: 'Joiker',
        password: 'Joiker'
      }
      return new Promise((resolve) => {
        resolve(res);
      });
    }
    this.logoutUser = () => {
      let res = {
        login: null,
        password: null
      }
      return new Promise((resolve) => {
        resolve(res);
      });
    }

    this.apiMain = apiActions({
      '../../api/index.js': {
        signUp: this.signUp,
        signIn: this.signIn,
        userIn: this.userIn,
        logoutUser: this.logoutUser
      }
    });


  })

  it('Should call dispatch with type: LOGIN and payload', function () {
    const dispatchSpy = jasmine.createSpy('dispatch');
    const stateAfter = this.apiMain.login('Joiker', 'Joiker')(dispatchSpy);
    setTimeout(() => {
      expect(dispatchSpy).toHaveBeenCalledWith({ type: 'LOGIN', payload: { userLogin: 'Joiker', pass: 'Joiker' } });
    }, 1);
  })

  it('Should call dispatch with type: ADD_USER and payload', function () {
    const dispatchSpy = jasmine.createSpy('dispatch');
    const stateAfter = this.apiMain.registrationUser('Виктория Севрюк', 'Vika', 'Vika')(dispatchSpy);
    setTimeout(() => {
      expect(dispatchSpy).toHaveBeenCalledWith({ type: 'ADD_USER', payload: { userName: 'Виктория Севрюк', userLogin: 'Vika', pass: 'Vika' } })
    }, 1);
  })

  it('Should call dispatch with type: SET_STATE and payload', function () {
    const dispatchSpy = jasmine.createSpy('dispatch');
    const stateAfter = this.apiMain.getUser()(dispatchSpy);
    setTimeout(() => {
      expect(dispatchSpy).toHaveBeenCalledWith({ type: 'SET_STATE', payload: { login: 'Joiker', password: 'Joiker' } })
    }, 1);
  })

  it('Should return type: LOGOUT', function () {
    const stateAfter = this.apiMain.logout();
    expect(stateAfter).toEqual({ type: 'LOGOUT' });
  })
})*/
