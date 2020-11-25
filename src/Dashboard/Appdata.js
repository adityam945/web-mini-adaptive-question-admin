import { Grid } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { UserListCard, ButtonDelete } from "../Themes/globalStyles";

const JSONAPI = [
  {
    olName: "First=> signin-routes",
    ulJson: [
      {
        ul1Name: "User Sign-In route:",
        ul2Name:
          "this route is a POST request accepting username and password {/users/signin/}",
      },
      {
        ul1Name: "User Sign-In Token route:",
        ul2Name:
          " this route is a GET request which authenticates user  singin {/verifyToken/}",
      },
      {
        ul1Name: "Admin Sign-In route:",
        ul2Name:
          "this route is a POST request accepting admin username and admin password{/users/signin/admin/}",
      },
      {
        ul1Name: "Admin Sign-In Token route:",
        ul2Name:
          " this route is a GET request which authenticates admin  singin {/verifyToken/admin}",
      },
    ],
  },
  {
    olName: "Second=> Quiz-routes",
    ulJson: [
      {
        ul1Name: "Quiz route",
        ul2Name: "this route is a GET request list all quiz {/quiz}",
      },
      {
        ul1Name: "Quiz route Add",
        ul2Name:
          "this route is a POST request accepts 4 variables and adds a new quiz {/quiz/add}",
      },
      {
        ul1Name: "Quiz route delete",
        ul2Name:
          "this route is a DELETE request deletes quiz from DB {/quiz/:id}",
      },
      {
        ul1Name: "Quiz route POST by ID (but works like GET request)",
        ul2Name:
          "this route is a POST request which on respose gives single quiz data {/quiz/:id}",
      },
    ],
  },
  {
    olName:
      "Third=> Userdata-routes (route which has response of users who answered questions)",
    ulJson: [
      {
        ul1Name: "Userdata route",
        ul2Name: "this route is a GET request list all userdata {/userdata}",
      },
      {
        ul1Name: "userdata route Add",
        ul2Name:
          "this route is a POST request accepts 7 variables and adds a new userdata {/userdata/add}",
      },
      {
        ul1Name: "userdata route delete",
        ul2Name:
          "this route is a DELETE request deletes userdata from DB {/userdata/:id}",
      },
      {
        ul1Name: "userdata route POST by ID (but works like GET request)",
        ul2Name:
          "this route is a POST request which on respose gives single userdata data {/userdata/:id}",
      },
      {
        ul1Name: "userdata route POST by ID (but works like GET request)",
        ul2Name:
          "this route is a POST request which accepts params of a users present and lists all the attempts of that user {/userdata/databyusername}",
      },
    ],
  },
  {
    olName:
      "Fourth=> Users-routes (route which has response of users who answered questions)",
    ulJson: [
      {
        ul1Name: "usersList route",
        ul2Name: "this route is a GET request list all usersList {/usersList}",
      },
      {
        ul1Name: "usersList route Add",
        ul2Name:
          "this route is a POST request accepts 4 variables and adds a new usersList {/usersList/add}",
      },
      {
        ul1Name: "usersList route delete",
        ul2Name:
          "this route is a DELETE request deletes usersList from DB {/usersList/:id}",
      },
      {
        ul1Name: "usersList route POST by ID (but works like GET request)",
        ul2Name:
          "this route is a POST request which on respose gives single usersList data {/usersList/:id}",
      },
    ],
  },
  {
    olName:
      "Fifth=> usersignup-routes (route which has response of users who answered questions)",
    ulJson: [
      {
        ul1Name: "usersignup route",
        ul2Name:
          "this route is a GET request list all usersignup {/usersignup}",
      },
      {
        ul1Name: "usersignup route Add",
        ul2Name:
          "this route is a POST request accepts 3 variables and adds a new usersignup {/usersignup/add}",
      },
      {
        ul1Name: "usersignup route delete",
        ul2Name:
          "this route is a DELETE request deletes usersignup from DB {/usersignup/:id}",
      },
      {
        ul1Name: "usersignup route POST by ID (but works like GET request)",
        ul2Name:
          "this route is a POST request which on respose gives single usersignup data {/usersignup/:id}",
      },
    ],
  },
];

export default function MyComponent() {
  return (
    <UserListCard>
      <div>
        <a href="/">
          <ButtonDelete>Go Back!</ButtonDelete>
        </a>

        <div>
          <Grid
            container
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Grid xs={12} md={8} lg={8} className="cardUserList">
              <h2 style={{ textAlign: "center" }}>About API and API routes</h2>
              <p>
                The main API link is{"=>"}{" "}
                https://adaptive-question-api.herokuapp.com/{" "}
              </p>
              <li>
                API is coded in JS using NODEJS, EXPRESS, and MONGODB for NoSQL
                DataBase
              </li>
              <p>
                API consists of multiple HTTP requests namely: <li>GET</li>{" "}
                <li>POST</li> <li>DELETE</li>
              </p>
              <p>
                API routes(for every data added to DB a unique is assigned
                _id:"")
                {JSONAPI.map((item) => (
                  <ul>
                    <li>
                      {item.olName}
                      {item.ulJson.map((item1) => (
                        <ul>
                          <br />
                          <li>
                            {item1.ul1Name}
                            <ul>
                              <li>{item1.ul2Name}</li>
                            </ul>
                          </li>
                        </ul>
                      ))}
                    </li>
                  </ul>
                ))}
              </p>
            </Grid>
          </Grid>
        </div>
      </div>
    </UserListCard>
  );
}
