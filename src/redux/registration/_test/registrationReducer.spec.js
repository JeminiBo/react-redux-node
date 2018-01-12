import myReducer from '../registrationReducers.jsx';
import actions from '../registrationActions.jsx';
import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import deepFreeze from 'deep-freeze';

describe('loginUserHandler', function () {
  beforeEach(function () {
    this.stateBefore = {
      users: {
        userName: '',
        userLogin: '',
        pass: '',

      }
    };
  });

  it('it should not change state if another action has dispatched', function () {
    deepFreeze(this.stateBefore);
    const anotherAction = { type: 'ANOTHER_ACTION', payload: { userName: 'dasdas' } };

    const stateAfter = myReducer(this.stateBefore, anotherAction);

    expect(stateAfter).toEqual(this.stateBefore);
  });
});

describe('check default values.', function () {
  beforeEach(function () {
    const anotherAction = { type: 'ANOTHER_ACTION', payload: { userName: 'Pasha' } };
    this.defaultState = myReducer(undefined, anotherAction);
  });

  it('Should have users property', function () {
    expect(this.defaultState.users).toEqual([]);
    expect(this.defaultState.currentUser).toEqual(null);
  });
});

describe('action login', function () {
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

describe('action logout', function () {
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

describe('action addUser', function () {
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
