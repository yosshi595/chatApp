import React, { useState } from "react";
// import { Redirect } from "react-router-dom";
// import { AuthContext } from "../AuthService";
import firebase from '../config/firebase';
import { Title } from "../style";
import { FormStyle } from "../style";
import { Lavel } from "../style";
import { Input } from "../style";
import { Btn } from "../style";

const SignUp = ({ history }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [name, setName] = useState('');

  // const user = useContext(AuthContext);




  //ログインの機能と同じような機能を作る


  // if (user) {
  //   <Redirect to='/' />
  // }


  const handleSubmit = (e) => {
    e.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => {
        //うまく実行されない。
        history.push('/login')
        // console.log(user)
      })
      .catch(error => {
        alert(error)
      });

    // if (!email.trim('')) {
    //   alert('Please your e-mail')
    // } else if (!password.trim('')) {
    //   alert('Please your password')
    // } else {
    //   alert('New registration completed!!')
    // }
  }

  return (
    <>
      <Title>SignUp</Title>
      <FormStyle onSubmit={handleSubmit}>
        <div>
          <Lavel htmlFor="email">e-mail</Lavel>
          <Input type="email" id="email" name="email" placeholder="email" required onChange={(e) => {
            setEmail(e.target.value);
          }} />
        </div>
        <div>
          <Lavel htmlFor="password">password</Lavel>
          <Input type="password" id="password" name="password" placeholder="password" required onChange={(e) => {
            setPassword(e.target.value)
          }} />
        </div>
        {/* <div>
          <label htmlFor="yourName">name</label>
          <input type="name" id="name" name="name" placeholder="name" onChange={(e) => {
            setName(e.target.value)
          }} />
        </div> */}
        <Btn type="submit">新規登録</Btn>
      </FormStyle>
      {/* <a href="http://localhost:3000/login">ログイン</a> */}
    </>
  )
}

export default SignUp