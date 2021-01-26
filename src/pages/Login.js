import React, { useContext, useState } from "react";
import firebase from '../config/firebase';
import { AuthContext } from "./../AuthService";
import { Redirect } from "react-router-dom";
import Title from '../components/Title'
// import { FormStyle } from "../style";
// import { Lavel } from "../style";
// import { Input } from "../style";
// import { Btn } from "../style";
import InputField from "../components/InputField";
import Button from "../components/Button";
import styled from "styled-components";

//historyは、ページ一つ一つが持つページの情報のことなどが入っている。
const Login = ({ history }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error,setError] = useState('');
  const [emailError, setEmaiError] = useState('');
  const [passwordError, setPassordError] = useState('');

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
        history.push('/');
        // console.log(history)
      })
      .catch(error => {
        if (error.code === 'auth/wrong-password') {
          setPassordError('パスワードが間違っています。');
        } else if (error.code === 'auth/too-many-requests') {
          setError('このアカウントへのアクセスは一時的に無効にされています。パスワードを設定するか、後でもう一度試してください。');
        } else if (error.code === 'auth/user-not-found') {
          setEmaiError('メールアドレスが間違っています。');
        }
      });
  };

  return (
    <>
      <Title text="Login" />
      <FormStyle onSubmit={handleSubmit}>
        <p>{error}</p>
        <InputField
          type="text"
          name="email"
          label="e-mail"
          placeholder="email"
          isRequired={true}
          onChange={(e) => setEmail(e.target.value)}
          error={emailError}
        />
        <InputField
          type="password"
          name="password"
          label="password"
          placeholder="password"
          isRequired={true}
          onChange={(e) => setPassword(e.target.value)}
          error={passwordError}
        />
        <Button type="submit" label="ログイン" />
        <Button type="link" to='/signup' label="新規登録" />
      </FormStyle>
      {/* <a></a>だったら、レンダーが起きて遅くなる */}
      {/* <a href="http://localhost:3000/signup">新規登録</a> */}
      {/* <a></a>タグでは無くて、react-rooter-domのLINKタグを使う */}
    </>
  )
}

export default Login;

export const FormStyle = styled.form`
  width 30%;
  margin: 0 auto;
  text-align: center;
  background-color: #ddd;
  padding: 40px 0;
`