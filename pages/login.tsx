import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LoginPage } from '../components/LoginPage'
import { Loading } from '../components/Loading'
import { login, startLogout, startGoogleLogin } from '../redux/auth/actions'
import { firebase, mapUserFromFirebaseAuthToUser, db } from '../firebase'
import { Redirect } from '../components/Redirect'
import { User } from '../interfaces'

const handleCreateUserInDatabase = async ({displayName, email, photoURL, uid}: User) => {
    const userExist = (await db.collection('users').doc(uid).get()).exists

    if(!userExist) {
        await db.collection('users').doc(uid).set({
            displayName,
            email,
            photoURL,
            uid,
        })
    }

}

const Login = () => {
    const dispatch = useDispatch()
    const auth = useSelector((state: any) => state.auth)

    useEffect(() => {
        firebase.auth().onAuthStateChanged(async(user) => {
            console.log(typeof user)
            console.log(user)
            user === null ?
                dispatch(startLogout())
                :
                await handleCreateUserInDatabase(user)
                dispatch(login(mapUserFromFirebaseAuthToUser(user)))
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
