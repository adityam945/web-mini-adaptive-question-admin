import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import axios from "axios";

import Login from "./Login/Login";
import Dashboard from "./Dashboard/Dashboard";

import PrivateRoute from "./Utils/PrivateRoute";
import PublicRoute from "./Utils/PublicRoute";
import { getToken, removeUserSession, setUserSession } from "./Utils/Common";

//
//
import { ThemeProvider } from "styled-components";
import { GlobalStyles, Button } from "./Themes/globalStyles";
import { lightTheme, darkTheme } from "./Themes/Themes";
//
import QuizList from "./Quiz/QuizList";
//
import UserList from "./Userlist/UserList";
import UserListAdd from "./Userlist/UserListAdd";
//
import UserData from "./Users/UsersData";
import UserDataAdd from "./Users/UsersDataAdd";
//
import UserRequest from "./UserRequest/UserRequest";
//
import AppData from "./Dashboard/Appdata";

function App() {
  const [authLoading, setAuthLoading] = useState(true);
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  useEffect(() => {
    const token = getToken();
    if (!token) {
      return;
    }

    axios
      .get(
        `https://login-auth-web-mini.herokuapp.com/verifyToken/admin?token=${token}`
      )
      .then((response) => {
        setUserSession(response.data.token, response.data.user);
        setAuthLoading(false);
      })
      .catch((error) => {
        removeUserSession();
        setAuthLoading(false);
      });
  }, []);

  if (authLoading && getToken()) {
    return (
      <div class="wrapper">
        <span class="circle circle-1"></span>
        <span class="circle circle-2"></span>
        <span class="circle circle-3"></span>
        <span class="circle circle-4"></span>
        <span class="circle circle-5"></span>
        <span class="circle circle-6"></span>
        <span class="circle circle-7"></span>
        <span class="circle circle-8"></span>
      </div>
    );
  }

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />

      <div className="App">
        <BrowserRouter>
          <div>
            <div className="header">
              <NavLink
                exact
                activeClassName="active"
                to="/"
                className="headera"
              >
                Home
              </NavLink>
              <div style={{ display: "flex", flex: 1 }} />
              <Button onClick={themeToggler}>
                <a>
                  {theme === "light" ? <a>Dark Mode</a> : <a>Light Mode</a>}
                </a>
              </Button>
            </div>
            <div className="content">
              <Switch>
                <PublicRoute exact path="/" component={Login} />
                <PrivateRoute path="/dashboard" component={Dashboard} />
                <PrivateRoute path="/quizlist" component={QuizList} />
                <PrivateRoute path="/userlist" component={UserList} />
                <PrivateRoute path="/userlistadd" component={UserListAdd} />
                <PrivateRoute path="/usersdata" component={UserData} />
                <PrivateRoute path="/usersdataadd" component={UserDataAdd} />
                <PrivateRoute path="/userrequest" component={UserRequest} />
                <PrivateRoute path="/appdata" component={AppData} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
