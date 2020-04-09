import React, { useEffect, useState } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

import initFirebase from './initFirebase'
import { setSession } from './firebaseSessionHandler'
import { createAuthUserInfo } from './user'

initFirebase()

// https://benmcmahen.com/using-firebase-with-react-hooks/

// Defaults to empty AuthUserInfo object.
export const AuthUserInfoContext = React.createContext(createAuthUserInfo())

export const useAuthUserInfo = () => {
  return React.useContext(AuthUserInfoContext)
}

// Returns a Firebase JS SDK user object.
export const useFirebaseAuth = () => {
  const [state, setState] = useState(() => {
    const user = firebase.auth().currentUser
    return {
      initializing: !user,
      user,
    }
  })

  function onChange(user, dbUser, token) {
    const combined = {
      id: user.uid,
      email: user.email,
      emailVerified: user.emailVerified,
      ...dbUser
    }

    // Set client side cookies
    localStorage.setItem('user', btoa(JSON.stringify(
      {
        AuthUser: {
          id: combined.id,
          email: combined.email,
          emailVerified: combined.emailVerified,
          roles: combined.roles,
        },
        token,
      }))
    )

    setState({ initializing: false, user: combined })

    // Call server to update session.
    setSession(token, combined)
  }

  function onSessionEnded() {
    localStorage.removeItem('user')
    setState({ initializing: false, user: null })
    setSession(null, null)
  }

  useEffect(() => {
    // Listen for auth state changes.
    const unsubscribe = firebase.auth().onAuthStateChanged(authUser => {
      if (authUser) {
        authUser.getIdToken().then(token => {
          firebase.database().ref(`users/${authUser.uid}`)
          .once('value')
          .then(snapshot => {
            const dbUser = snapshot.val()

            if (!dbUser.roles) {
              dbUser.roles = {}
            }

            onChange(authUser, dbUser, token)
          })
        })
        
      } else {
        onSessionEnded()
      }
    })

    // Unsubscribe to the listener when unmounting.
    return () => unsubscribe()
  }, [])

  return state
}