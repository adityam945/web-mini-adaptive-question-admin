import React, { useState } from "react";
import axios from "axios";
import { setUserSession } from "../Utils/Common";
import "./Login.css";
import { Button, Grid, Typography } from "@material-ui/core";
import { LoginCardColor } from "../Themes/globalStyles";

function Login(props) {
  const [loading, setLoading] = useState(false);
  const username = useFormInput("");
  const password = useFormInput("");
  const [error, setError] = useState(null);

  // handle button click of login form
  const handleLogin = () => {
    setError(null);
    setLoading(true);
    axios
      .post("https://adaptive-question-api.herokuapp.com/users/signin/admin", {
        username: username.value,
        password: password.value,
      })
      .then((response) => {
        setLoading(false);
        setUserSession(response.data.token, response.data.user);
        props.history.push("/dashboard");
      })
      .catch((error) => {
        setLoading(false);
        if (error.response.status === 401)
          setError(error.response.data.message);
        else setError("Something went wrong. Please try again later.");
      });
  };

  return (
    <LoginCardColor>
      <div className="main1">
        <div className="app">
          <Grid container>
            <Grid
              item
              xs={12}
              md={12}
              lg={12}
              justify="top"
              alignContent="top"
              style={{
                display: "flex",
                flexDirection: "column",
                display: "flex",
                flex: 1,
              }}
            >
              <h2 style={{ textAlign: "center" }}>Login</h2>
              <br />
              <div>
                <label className="textToRight" style={{ fontSize: "20px" }}>
                  Username
                </label>

                <br />
                <input
                  className="textToRight"
                  type="text"
                  {...username}
                  autoComplete="new-password"
                  style={{ width: "100%" }}
                />
              </div>
              <div style={{ marginTop: 10 }}>
                <label className="textToRight" style={{ fontSize: "20px" }}>
                  Password
                </label>
                <br />
                <input
                  className="textToRight"
                  type="password"
                  {...password}
                  autoComplete="new-password"
                  style={{ width: "100%" }}
                />
              </div>
              {error && (
                <>
                  <small style={{ color: "red" }}>{error}</small>
                  <br />
                </>
              )}
              <br />
              <input
                className="buttonTakeQuiz"
                type="button"
                value={loading ? "Please Wait(Authenticating User)" : "Login"}
                onClick={handleLogin}
                disabled={loading}
              />
              <br />
            </Grid>
          </Grid>
        </div>
      </div>
    </LoginCardColor>
  );
}

const useFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return {
    value,
    onChange: handleChange,
  };
};

export default Login;
