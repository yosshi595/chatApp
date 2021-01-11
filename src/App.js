import React from 'react';
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Room from "./pages/Room";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { Chat } from "./style";
import { AuthProvider } from "./AuthService";
import LoggedInRoute from './LoggedInRoute';
// import SignUpRoute from './SignUpRoute';

const App = () => {
  return (
    <>
      <AuthProvider>
        <Chat>Chat App</Chat>
        <Router>
          <Switch>
            <Route path='/login' component={Login} />
            <Route path='/signup' component={SignUp} />
            <LoggedInRoute path='/' component={Room} />
          </Switch>
        </Router>
      </AuthProvider>
    </>
  )
}

export default App