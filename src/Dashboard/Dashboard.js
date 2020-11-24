import React from "react";
import { getUser, removeUserSession } from "../Utils/Common";
import "../index.css";
import { Button, Grid } from "@material-ui/core";

function Dashboard(props) {
  const user = getUser();

  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    props.history.push("/login");
  };

  return (
    <div>
      Welcome {user.name}!<br />
      <br />
      <input type="button" onClick={handleLogout} value="Logout" />
      <Grid container spacing={1}>
        <Grid
          item
          xs={12}
          md={6}
          lg={6}
          style={{ border: "2px solid black", marginTop: 20 }}
        >
          <h2 style={{ textAlign: "center" }}> Quiz Section</h2>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <a href="/quizlist">
              <Button>Available quiz</Button>
            </a>

            <Button>Add Quiz</Button>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={6}
          style={{ border: "2px solid black", marginTop: 20 }}
        >
          <h2 style={{ textAlign: "center" }}> Quiz Section</h2>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <a href="/userlist">
              <Button>Available quiz</Button>
            </a>

            <Button>Add Quiz</Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Dashboard;
