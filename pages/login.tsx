import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LoginPage } from '../components/LoginPage'
import { Loading } from '../components/Loading'
import { login, logout, startGoogleLogin } from '../redux/auth/actions'
import { firebase, mapUserFromFirebaseAuthToUser } from '../firebase'
import { Redirect } from '../components/Redirect'

const Login = () => {
    const dispatch = useDispatch()
    const auth = useSelector((state: any) => state.auth)
    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            console.log(typeof user)
            console.log(user)
            user == null ? dispatch(logout()) : dispatch(login(mapUserFromFirebaseAuthToUser(user)))
        })
    }, [])
    return (
        (auth.login !== null) ?
            (auth.login ?
                <Redirect to="/" />
                :
                <LoginPage googleOnClick={dispatch(startGoogleLogin)} />)
            : <Loading />

    )
}

export default React.memo(Login)
