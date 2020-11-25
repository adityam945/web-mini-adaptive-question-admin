import { Grid } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { UserListCard, ButtonDelete } from "../Themes/globalStyles";

export default function MyComponent() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  function userListDelete(id) {
    if (window.confirm("Are you Sure of this Action")) {
      fetch(`https://adaptive-question-api.herokuapp.com/usersignup/` + id, {
        method: "DELETE",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json;charset=utf-8",
        },
      });
      window.location = "/userrequest";
    }
  }

  useEffect(() => {
    fetch("https://adaptive-question-api.herokuapp.com/usersignup/")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.UserSignup);
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
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
  } else {
    return (
      <UserListCard>
        <div>
          <a href="/">
            <ButtonDelete>Go Back!</ButtonDelete>
          </a>
          {items.map((item) => (
            <div key={item.id}>
              <Grid
                container
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <Grid xs={12} md={8} lg={8} className="cardUserList">
                  <div>
                    <div
                      style={{
                        borderBottom: "3px solid Black",
                        paddingBottom: 10,
                      }}
                    >
                      Deletion action cannot be reverted{" =>"}
                      <ButtonDelete onClick={() => userListDelete(item._id)}>
                        Delete Entry
                      </ButtonDelete>
                    </div>

                    <p style={{ textAlign: "center" }}>
                      Name of User: {item.name} <br />
                      Contact of User: {item.contact} <br />
                      Description given by User: {item.userDescription}
                    </p>
                  </div>
                </Grid>
              </Grid>{" "}
            </div>
          ))}
        </div>
      </UserListCard>
    );
  }
}
