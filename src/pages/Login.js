import React, { useContext, useState } from "react";
import firebase from '../config/firebase';
import { AuthContext } from "./../AuthService";
import { Link, Redirect } from "react-router-dom";
import { Title } from "../style";
import { FormStyle } from "../style";
import { Lavel } from "../style";
import { Input } from "../style";
import { Btn } from "../style";
import '../style.css';

//historyは、ページ一つ一つが持つページの情報のことなどが入っている。
const Login = ({ history }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useContext(AuthContext);

  //これは、loginのページに行った時、userがいたら、roomにリダイレクトしている。
  //この実装をなくせば、signUpからloginにリダイレクトできる。
  if (user) {
    return <Redirect to='/' />
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        //これは、onSubmit時（提出した時）に成功したら、roomにリダイレクトしている。
        history.push('/')
        // console.log(history)
      })
      .catch(error => {
        if (error.code === 'auth/wrong-password') {
          // alert('パスワードが間違っています。')
          document.getElementById('loginPasswordEr').textContent = 'パスワードが間違っています。'
        } else if (error.code === 'auth/too-many-requests') {
          // alert('このアカウントへのアクセスは一時的に無効にされています。パスワードを設定するか、後でもう一度試してください。')
          document.getElementById('loginEmailEr').textContent = 'このアカウントへのアクセスは一時的に無効にされています。パスワードを設定するか、後でもう一度試してください。'
        } else if (error.code === 'auth/user-not-found') {
          // alert('メールアドレスが間違っています。')
          document.getElementById('loginEmailEr').textContent = 'メールアドレスが間違っています。'
        }
        // alert(error)
        // console.log(history)
        // console.log(error)
      });
  }

  return (
    <>
      <Title>Login</Title>
      <FormStyle onSubmit={handleSubmit}>
        <div>
          <Lavel htmlFor="email">e-mail</Lavel>
          <Input type="email" name="email" id="email" placeholder="email" required onChange={(e) => setEmail(e.target.value)} />
          <p id='loginEmailEr'></p>
        </div>
        <div>
          <Lavel htmlFor="password">password</Lavel>
          <Input type="password" name="password" id="password" placeholder="password" required onChange={(e) => setPassword(e.target.value)} />
          <p id='loginPasswordEr'></p>
        </div>
        <Btn type="submit">ログイン</Btn>
        <Link className='link-btn' to='/signup'>新規登録</Link>
      </FormStyle>
      {/* <a></a>だったら、レンダーが起きて遅くなる */}
      {/* <a href="http://localhost:3000/signup">新規登録</a> */}
      {/* <a></a>タグでは無くて、react-rooter-domのLINKタグを使う */}
    </>
  )
}

export default Login