import { signUp, signIn } from "../../api/index.js"


export const registrationUser = (userName, userLogin, pass) => dispatch => {
    signUp(userName, userLogin, pass).then((res) => dispatch({
        type: "ADD_USER",
        payload: {
            userName,
            userLogin,
            pass
        }
    }
    )
    )
        .catch((err) => {

            alert(err.message)
        })



};

export const login = (userLogin, pass) => dispatch => {
    signIn(userLogin, pass).then((res) => dispatch({

        type: "LOGIN",
        payload: {
            userLogin: res.login,
            pass: res.password

        }
    }

    ))
        .catch((err) => {

            alert(err.message)
        })






}
export const logout = function () {
    return {
        type: "LOGOUT"

    }
}
