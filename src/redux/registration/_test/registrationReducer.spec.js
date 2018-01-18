import myReducer from '../registrationReducers.jsx';
import actions from '../registrationActions.jsx';
import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import deepFreeze from 'deep-freeze';

describe('Test reducer:', function () {
  describe('Check default values:', function () {
    beforeEach(function () {
      const anotherAction = { type: 'ANOTHER_ACTION', payload: { userName: 'Pasha' } };
      this.defaultState = myReducer(undefined, anotherAction);
    });

    it('Should have users property', function () {
      expect(this.defaultState.users).toEqual([]);
      expect(this.defaultState.currentUser).toEqual(null);
    });
  });
  
  describe('Check dispatch another action:', function () {
    beforeEach(function () {
      this.stateBefore = {
        users: {
          userName: '',
          userLogin: '',
          pass: '',

        }
      };
    });

    it('It should not change state if another action has dispatched', function () {
      deepFreeze(this.stateBefore);
      const anotherAction = { type: 'ANOTHER_ACTION', payload: { userName: 'dasdas' } };

      const stateAfter = myReducer(this.stateBefore, anotherAction);

      expect(stateAfter).toEqual(this.stateBefore);
    });
  });

  describe('Action login:', function () {
    beforeEach(function () {
      this.createLoginAction = () => {
        const payload = {
          userLogin: 'Pasha',
          pass: '12345'
        };
        return {
          type: 'LOGIN',
          payload
        }
      }

    })
    it('Should set currentUser', function () {
      const stateAfter = myReducer(this.stateBefore, this.createLoginAction());

      expect(stateAfter.currentUser.userLogin).toEqual('Pasha');
    })
  })

  describe('Action logout:', function () {
    beforeEach(function () {
      this.createLoginAction = () => {
        const payload = {
          userLogin: 'Pasha',
          pass: '12345'
        };
        return {
          type: 'LOGIN',
          payload
        }
      };

      this.createLogoutAction = () => {
        return {
          type: 'LOGOUT',
        }
      };
      this.stateBefore = myReducer(undefined, this.createLoginAction());
    })
    it('Should clear currentUser', function () {
      deepFreeze(this.stateBefore);
      const stateAfter = myReducer(this.stateBefore, this.createLogoutAction());
      expect(stateAfter.currentUser).toEqual(null);
    })
  })

  describe('Action addUser:', function () {
    beforeEach(function () {
      this.createAddUserAction = () => {
        const payload = {
          userName: 'Misha Dubrouski',
          userLogin: 'Mish',
          pass: '12345'
        };
        return {
          type: 'ADD_USER',
          payload
        }
      };
      this.stateBefore = {
        users: []
      };

    })

    it('Should set users', function () {
      const stateAfter = myReducer(this.stateBefore, this.createAddUserAction());
      expect(stateAfter.users[0].userName).toEqual('Misha Dubrouski');
      expect(stateAfter.users[0].userLogin).toEqual('Mish');
      expect(stateAfter.users[0].pass).toEqual('12345');
    })
  })

  describe('Action getUser:', function () {
    beforeEach(function () {
      this.createGetUserAction = () => {
        const payload = {
          login: 'Joiker',
        };
        return {
          type: 'SET_STATE',
          payload
        }
      };

      this.stateBefore = {
        users: [],
        currentUser: null
      };
    });

    it('Should get user', function () {
      deepFreeze(this.stateBefore);
      const stateAfter = myReducer(this.stateBefore, this.createGetUserAction());
      expect(stateAfter.currentUser.userLogin).toEqual('Joiker');
    });
  });
})