import React, { useState, useEffect } from 'react'
import firebase from './config/firebase'

const AuthContext = React.createContext();
// console.log(AuthContext)

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  //レンダーし終わった後に、実行したい処理をuseEffectの「中」に書く。
  //useEffectは非同期処理と同じなのか?
  //ライフサイクル?
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      // console.log(user)
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