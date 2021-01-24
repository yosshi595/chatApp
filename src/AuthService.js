import React, { useState, useEffect } from 'react'
import firebase from './config/firebase'

const AuthContext = React.createContext();
// console.log(AuthContext)

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  useEffect(() => {
    //onAuthStateChangedメッソドは、ユーザーのログイン状態が変わるたびに呼び出される。
    //firebaseから、ユーザーの情報を取り出している。
    firebase.auth().onAuthStateChanged(user => {
      // console.log(user.displayName)
      setUser(user)
    })
  }, [])
  return (
    <AuthContext.Provider value={user}>
      {children}
    </AuthContext.Provider>
  )
}

export {
  AuthContext,
  AuthProvider
}