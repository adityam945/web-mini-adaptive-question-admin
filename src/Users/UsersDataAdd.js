import { Grid } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { UserListCard, ButtonDelete } from "../Themes/globalStyles";

export default function MyComponent() {
  const [error, setError] = useState(null);
  const [items, setItems] = useState([]);
  const [name, setName] = useState([]);
  const [userName, setuserName] = useState([]);
  const [password, setPassword] = useState([]);
  const [contact, setContact] = useState([]);

  function addUserList() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: userName,
        name: name,
        password: password,
        contact: contact,
      }),
    };
    fetch(
      "https://adaptive-question-api.herokuapp.com/usersList/add",
      requestOptions
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setItems(result);
        },

        (error) => {}
      );
  }

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
            <Grid
              xs={12}
              md={8}
              lg={8}
              style={{
                width: 300,
                border: "2px solid black",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <div>
                <h2 style={{ textAlign: "center" }}>Add user</h2>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <label>
                  Username:
                  <br />
                  <input
                    required
                    className="textToRight"
                    type="text"
                    value={userName}
                    onChange={(e) => setuserName(e.target.value)}
                    style={{ width: "100%" }}
                  />
                </label>
                <label>
                  Name:
                  <br />
                  <input
                    type="text"
                    className="textToRight"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </label>
                <label>
                  Password:
                  <br />
                  <input
                    type="text"
                    className="textToRight"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </label>
                <label>
                  Contact:
                  <br />
                  <input
                    className="textToRight"
                    type="text"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                  />
                </label>
                <br />
                {JSON.stringify(items.message)}
                <button onClick={() => addUserList()}>Add user</button>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </UserListCard>
  );
}
