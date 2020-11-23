import React from "react";
import { getUser, removeUserSession } from "../Utils/Common";
import "./index.css";
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
      <Grid container>
        <Grid item xs={12} md={12} lg={12}>
          <Button></Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default Dashboard;
