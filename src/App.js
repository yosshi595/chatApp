import React from 'react';
import styled from "styled-components";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Room from "./pages/Room";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { AuthProvider } from "./AuthService";
import LoggedInRoute from './LoggedInRoute';

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

export default App;

export const Chat = styled.h1`
  font-size: 35px;
  color: red;
`
