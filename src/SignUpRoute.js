// import React, { useContext } from "react";
// import { Redirect, Route } from "react-router-dom";
// import { AuthContext } from "./AuthService";


//ログインの実装と同じようにレダイレクトを実行しようとしましたが、うまく実行できなかった。


// const SignUpRoute = ({ component: Component, ...rest }) => {

//   const user = useContext(AuthContext);
//   // console.log(user);

//   return (
//     <Route
//       {...rest}
//       render={props => user ? (
//         <Component {...props} />
//       ) : (
//           <Redirect to='/login' />
//         )
//       }
//     />
//   )
// }

// export default SignUpRoute