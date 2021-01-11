import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { AuthContext } from "./AuthService";

const LoggedInRoute = ({ component: Component, ...rest }) => {
  // console.log(rest)

  const user = useContext(AuthContext);
  // console.log(user);

  return (
    //ログインされていたら、受け取ったコンポーネントを表示
    //ログインされていなければ、ログインページにリダイレクト
    <Route
    {...rest} //restを展開する意味は何なのか?
    //このpropsは何なのか?何のために引数で受け取っているのか?
    render = {props => user ? (
      //propsを展開する意味が分からなかった。
      <Component {...props} />
      // console.log(props)
      ) : (
        <Redirect to='/login' />
        )
      }
      />
      )
    }

export default LoggedInRoute