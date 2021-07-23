import React, { useEffect } from 'react'
import { firebase, mapUserFromFirebaseAuthToUser, db } from '../firebase'
import { useDispatch, useSelector } from 'react-redux'
import { HomePage } from '../components/HomePage'
import { Redirect } from '../components/Redirect'
import { login, startLogout, startGoogleLogin } from '../redux/auth/actions'
import { Loading } from '../components/Loading'

const IndexPage = () => {
  const user = useSelector((state: any) => state.auth)

  const dispatch = useDispatch()
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log('INDEX', user)
      user !== null ?
        dispatch(login(mapUserFromFirebaseAuthToUser(user)))
        : dispatch(startLogout())
    })
  }, [])

  return (
    //TODO redirect if are not login
    (user.login !== null) ?

      (user.login
        ?
        <HomePage user={user} />
        :
        <Redirect to="/login" />)
      : <Loading />
  )
}

export default IndexPage
