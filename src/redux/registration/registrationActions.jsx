import {signUp,signIn} from"../../api/index.js"


export const registrationUser = function (userName,userLogin, pass) {
     signUp(userName,userLogin,pass);
       
    
    return {
        type: "ADD_USER",
        payload: {
            userName,
            userLogin,
            pass
        }
    }
};

export const login = (userLogin, pass)=>dispatch=> {
    signIn(userLogin,pass).then((res)=>dispatch({
               
            type: "LOGIN",
            payload: {
                userLogin: res.login,
                pass:res.password
            
        }
    }
));

    
   
}
export const logout = function () {
    return {
        type: "LOGOUT"
        
    }
}
