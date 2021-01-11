import React, { useContext, useState } from "react";
import firebase from '../config/firebase';
import { AuthContext } from "./../AuthService";
import { Redirect } from "react-router-dom";
import { Title } from "../style";
import { FormStyle } from "../style";
import { Lavel } from "../style";
import { Input } from "../style";
import { Btn } from "../style";

//historyが何かよくわからなかった。
const Login = ({ history }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useContext(AuthContext);



  //ログインしたけどうまくいかなかったときの処理を作る

//これは何を実行しているのか?
  if (user) {
    return <Redirect to='/' />
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => {
        //リダイレクトをされているのは理解できましたが、どのタイミングでされているのか分からなかった。
        history.push('/')
      })
      .catch(error => {
        //このエラー文を日本語になおしたりすることはできるのか
        alert(error)
        // console.log(error)
      });
  }

  return (
    <>
      <Title>Login</Title>
      <FormStyle onSubmit={handleSubmit}>
        <div>
          <Lavel htmlFor="email">email</Lavel>
          <Input type="email" name="email" id="email" placeholder="email" required onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <Lavel htmlFor="password">password</Lavel>
          <Input type="password" name="password" id="password" placeholder="password" repuired onChange={(e) => setPassword(e.target.value)} />
        </div>
        <Btn type="submit">ログイン</Btn>
      </FormStyle>
      {/* <a href="http://localhost:3000/signup">新規登録</a> */}
    </>
  )
}

export default Login