const apiActions = require('inject-loader!../registrationActions.jsx');

describe('Test actions:', function () {
  describe('Test registration action:', function () {
    describe('Promise return resolve:', function () {
      beforeEach(function (done) {
        this.signUp = () => {
          return new Promise((resolve, reject) => {
            resolve();
          });
        }

        this.apiMain = apiActions({
          '../../api/index.js': {
            signUp: this.signUp,
          }
        });

        this.dispatchSpy = jasmine.createSpy('dispatch');
        this.stateAfter = this.apiMain.registrationUser('Виктория Севрюк', 'Vika', 'Vika')(this.dispatchSpy);
        done();
      })

      it('Should dispatch registrationUser action if user registered', function () {
        expect(this.dispatchSpy).toHaveBeenCalledWith({ type: 'ADD_USER', payload: { userName: 'Виктория Севрюк', userLogin: 'Vika', pass: 'Vika' } })
      })
    });

    describe('Promise return reject::', function () {
      beforeEach(function (done) {
        this.signUp = () => {
          return new Promise((resolve, reject) => {
            reject();
          });
        }
        this.apiMain = apiActions({
          '../../api/index.js': {
            signUp: this.signUp,
          }
        });

        this.dispatchSpy = jasmine.createSpy('dispatch');
        this.stateAfter = this.apiMain.registrationUser('Виктория Севрюк', 'Vika', 'Vika')(this.dispatchSpy);
        done();
      })

      it('Should dispatch reject if user not registered', function () {
        expect(this.dispatchSpy).toHaveBeenCalledWith({ type: 'ADD_USER_REJECTED' })
      })
    })
  })

  describe('Test login action:', function () {
    describe('Promise return resolve:', function () {
      beforeEach(function (done) {
        this.signIn = (login, password) => {
          let res = {
            login,
            password
          }
          return new Promise((resolve) => {
            resolve(res);
          });
        }

        this.apiMain = apiActions({
          '../../api/index.js': {
            signIn: this.signIn,
          }
        });

        this.dispatchSpy = jasmine.createSpy('dispatch');
        this.stateAfter = this.apiMain.login('Joiker', 'Joiker')(this.dispatchSpy);
        done();
      })

      it('Should dispatch login action if user exists', function () {
        expect(this.dispatchSpy).toHaveBeenCalledWith({ type: 'LOGIN', payload: { userLogin: 'Joiker', pass: 'Joiker' } });
      })
    })

    describe('Promise return reject:', function () {
      beforeEach(function (done) {
        this.signIn = (login, password) => {
          let res = {
            login,
            password
          }
          return new Promise((resolve, reject) => {
            reject();
          });
        }

        this.apiMain = apiActions({
          '../../api/index.js': {
            signIn: this.signIn,
          }
        });

        this.dispatchSpy = jasmine.createSpy('dispatch');
        this.stateAfter = this.apiMain.login('Joiker', 'Joiker')(this.dispatchSpy);
        done();
      })

      it('Should dispatch reject if user not exists', function () {
        expect(this.dispatchSpy).toHaveBeenCalled();
      })
    })
  })

  describe('Test getUser action:', function () {
    describe('Promise return resolve:', function () {
      beforeEach(function (done) {
        this.userIn = () => {
          let res = {
            login: 'Joiker',
            password: 'Joiker'
          }
          return new Promise((resolve) => {
            resolve(res);
          });
        }

        this.apiMain = apiActions({
          '../../api/index.js': {
            userIn: this.userIn,
          }
        });

        this.dispatchSpy = jasmine.createSpy('dispatch');
        this.stateAfter = this.apiMain.getUser()(this.dispatchSpy);
        done();
      })
      it('Should dispatch getUser action if user is received', function () {
        expect(this.dispatchSpy).toHaveBeenCalledWith({ type: 'SET_STATE', payload: { login: 'Joiker', password: 'Joiker' } })
      })

    })

    describe('Promise return reject:', function () {
      beforeEach(function (done) {
        this.userIn = () => {
          let res = {
            login: 'Joiker',
            password: 'Joiker'
          }
          return new Promise((resolve, reject) => {
            reject();
          });
        }

        this.apiMain = apiActions({
          '../../api/index.js': {
            userIn: this.userIn,
          }
        });

        this.dispatchSpy = jasmine.createSpy('dispatch');
        this.stateAfter = this.apiMain.getUser()(this.dispatchSpy);
        done();
      })

      it('Should dispatch reject if user is not received', function () {
        expect(this.dispatchSpy).toHaveBeenCalledWith({ type: 'SET_STATE_REJECTED' });
      })
    })
  })

  describe('Test logout action:', function () {
    beforeEach(function () {
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
          logoutUser: this.logoutUser,
        }
      });
    })
    it('Should return type: LOGOUT', function () {
      const stateAfter = this.apiMain.logout();
      expect(stateAfter).toEqual({ type: 'LOGOUT' });
    })
  })
})
