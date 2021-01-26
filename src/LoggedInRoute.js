import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { AuthContext } from "./AuthService";

//このコンポーネントはroomのページに行ったときにuserがいたらroomに行き、userがいなかったら、loginにリダイレクトするコンポーネント。
const LoggedInRoute = ({ component: Component, ...rest }) => {
  // console.log(rest)

  const user = useContext(AuthContext);
  // console.log(user);

  return (
    //ログインされていたら、受け取ったコンポーネントを表示
    //ログインされていなければ、ログインページにリダイレクト
    <Route
    {...rest} //このrestはpathなどの情報が入っている
    //このpropsはhistoryなどのページ一つ一つにある情報
    render = {props => user ? (
      <Component {...props} />
      // console.log(props)
      ) : (
        <Redirect to='/login' />
        )
      }
      />
      )
    }

export default LoggedInRoute;