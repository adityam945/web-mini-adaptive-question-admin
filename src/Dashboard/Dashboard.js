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
      <div>
        <h2 style={{ textAlign: "center" }}>
          Welcome ADMIN!
          <br />
          <input
            type="button"
            onClick={handleLogout}
            value="Logout"
            className="buttonLogOut"
          />
        </h2>
      </div>
      <div>
        Read all the api routes here {"=>"}
        <a href="/appdata" style={{ textDecoration: "none" }}>
          <Button>About API</Button>
        </a>
      </div>

      <Grid container spacing={1}>
        <Grid
          item
          xs={12}
          md={6}
          lg={6}
          style={{ border: "2px solid black", marginTop: 20 }}
        >
          <h2 style={{ textAlign: "center" }}> Quiz Section</h2>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <a href="/quizlist" style={{ textDecoration: "none" }}>
              <Button>Available quiz</Button>
            </a>

            <Button>Add Quiz(Not done)</Button>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={6}
          style={{ border: "2px solid black", marginTop: 20 }}
        >
          <h2 style={{ textAlign: "center" }}>
            {" "}
            Users List Attepted Quiz Section
          </h2>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <a href="/userlist" style={{ textDecoration: "none" }}>
              <Button>User List</Button>
            </a>
          </div>
        </Grid>{" "}
        <Grid
          item
          xs={12}
          md={6}
          lg={6}
          style={{ border: "2px solid black", marginTop: 20 }}
        >
          <h2 style={{ textAlign: "center" }}>
            {" "}
            User Data
            <br /> (username and other details)
          </h2>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <a href="/usersdata" style={{ textDecoration: "none" }}>
              <Button>Users List</Button>
            </a>
            <a href="/usersdataadd" style={{ textDecoration: "none" }}>
              <Button>User Add</Button>
            </a>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={6}
          style={{ border: "2px solid black", marginTop: 20 }}
        >
          <h2 style={{ textAlign: "center" }}>
            {" "}
            User Sign Up
            <br /> (New User request)
          </h2>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <a href="/userrequest" style={{ textDecoration: "none" }}>
              <Button>Users List</Button>
            </a>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Dashboard;
