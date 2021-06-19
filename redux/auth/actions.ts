import { firebase } from "../../firebase";
import 'firebase/auth'
import { types } from "../types";

export const login = (user) => ({
    type: types.login,
    payload: user
});


export const startGoogleLogin = () => {
    return (dispatch: any) => {

        const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithRedirect(googleAuthProvider)

        localStorage.setItem("login", "true")
    }
}

export const startLogout = () => {
    return async (dispatch: any) => {
        firebase.auth().signOut()
        console.log("holaa")
        dispatch(logout())
        localStorage.removeItem("login")
    }
}

export const logout = () => ({
    type: types.logout
})