import {registrationUser, login, getUser, logout} from '../registrationActions.jsx';
const apiInjector = require('inject-loader!../../../api/index.js');


describe('test action login without api', function (){
  beforeEach(function () {
    const apiMain = apiInjector();
    
    const  signInt = () =>{
      const login = 'sad';
      const password  = 'sad';
      return {login,password}
    }
    apiMain.signIn = signInt();
    console.log(apiMain.signIn);
    console.log(apiMain);
    
  })

  it('login test', function(){
    
    
    expect(true).toEqual(true);
    
  })
})