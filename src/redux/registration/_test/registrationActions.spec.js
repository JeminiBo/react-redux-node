import * as actions from '../registrationActions.jsx';
import { setTimeout } from 'timers';
const apiActions = require('inject-loader!../registrationActions.jsx');


describe('test action login without api', function () {
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

      return false
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

  it('action login test', function () {
    const dispatchSpy = jasmine.createSpy('dispatch');
    const stateAfter = this.apiMain.login('Joiker', 'Joiker')(dispatchSpy);
    setTimeout(() => {
      expect(dispatchSpy).toHaveBeenCalledWith({ type: 'LOGIN', payload: { userLogin: 'Joiker', pass: 'Joiker' } });
    }, 1);
  })

  it('action registrationUser test', function () {
    const dispatchSpy = jasmine.createSpy('dispatch');
    const stateAfter = this.apiMain.registrationUser('Виктория Севрюк', 'Vika', 'Vika')(dispatchSpy);
    setTimeout(() => {
      expect(dispatchSpy).toHaveBeenCalledWith({ type: 'ADD_USER', payload: { userName: 'Виктория Севрюк', userLogin: 'Vika', pass: 'Vika' } })
    }, 1);
  })

  it('action getUser test', function () {
    const dispatchSpy = jasmine.createSpy('dispatch');
    const stateAfter = this.apiMain.getUser()(dispatchSpy);
    setTimeout(() => {
      expect(dispatchSpy).toHaveBeenCalledWith({ type: 'SET_STATE', payload: { login: 'Joiker', password: 'Joiker' } })
    }, 1);
  })
})
