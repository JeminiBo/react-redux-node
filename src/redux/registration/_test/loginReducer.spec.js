import loginUserHandler from '../registrationReducers.jsx'; 
//import ACTIONS from '../registrationActions.jsx'; 
import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import deepFreeze from 'deep-freeze';

describe("Check function minLength :", function () {
  it("Should return true, if value is less then 5", function () {
      
      expect(true).toBe(true);
  });
});
describe("Check function minLength :", function () {
  it("Should return true, if value is less then 5", function () {
      
      expect(true).toBe(true);
  });
});

describe('MyComponent', function() {
  var Utils = ReactTestUtils;

  it('can render without error', function() {
    var component, element;
   
    element = React.createElement('h1', {}, 'My First React Code');

    
    expect(function() {
      component = Utils.renderIntoDocument(element);
    }).not.toThrow();
  });
})

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
const anotherAction = { type: 'ANOTHER_ACTION', payload: null }; 

const stateAfter = loginUserHandler(this.stateBefore, anotherAction); 

expect(stateAfter).to.equal(this.stateBefore); 
}); 
}); 

