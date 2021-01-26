import React, { useState } from "react";
import { Link } from "react-router-dom";
import firebase from '../config/firebase';
import { Title,FormStyle,Lavel,Input,Btn } from "../style";
// import { FormStyle } from "../style";
// import { Lavel } from "../style";
// import { Input } from "../style";
// import { Btn } from "../style";
import '../style.css';

const SignUp = ({ history }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');


  //この実装は、初めにuserがいたらroomにリダイレクトされているし、いなかったらloginにリダイレクトされているのでsignUpページにuserがいることはない。
  // if (user) {
  //   <Redirect to='/' />
  // }


  const handleSubmit = (e) => {
    e.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        history.push('/');
        // console.log(user)
        user.updateProfile({
          displayName: name
        });
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          // alert('このメールアドレスは他のアカウントで使用されています。')
          setEmailError('このメールアドレスは他のアカウントで使用されています。');
        } else if (error.code === 'auth/weak-password') {
          // alert('パスワードは6文字以上です。')
          setPasswordError('パスワードは6文字以上です。');
        }
        // console.log(error)
      });
  };

  return (
    <>
      <Title>SignUp</Title>
      <FormStyle onSubmit={handleSubmit}>
        <div>
          <Lavel htmlFor="email">e-mail</Lavel>
          <Input type="email" id="email" name="email" placeholder="email" required onChange={(e) => { setEmail(e.target.value) }} />
          <p>{emailError}</p>
        </div>
        <div>
          <Lavel htmlFor="password">password</Lavel>
          <Input type="password" id="password" name="password" placeholder="password" required onChange={(e) => { setPassword(e.target.value) }} />
          <p>{passwordError}</p>
        </div>
        <div>
          <Lavel htmlFor="yourName">name</Lavel>
          <Input type="name" id="yourName" name="name" placeholder="name" onChange={(e) => { setName(e.target.value) }} />
        </div>
        <Btn type="submit">新規登録</Btn>
        <Link className='link-btn' to='/login'>ログイン</Link>
      </FormStyle>
      {/* <a href="http://localhost:3000/login">ログイン</a> */}
    </>
  )
}

export default SignUp;