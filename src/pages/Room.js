import React from "react";
import {Title} from "../style";
import firebase from '../config/firebase'

// import Login from "../pages/Login";
// import SignUp from "../pages/SignUp";

const Room = () => {


  return (
    <>
      <Title>Room</Title>
      <button onClick={() => {firebase.auth().signOut()}}>ログアウト</button>
    </>
  )
}

export default Room