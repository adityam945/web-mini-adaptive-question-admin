import { Grid } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "./Quiz.css";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { QuizListCard, ButtonDelete } from "../Themes/globalStyles";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function MyComponent() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  function quizDelete(id) {
    if (window.confirm("Are you Sure of this Action")) {
      fetch(`https://adaptive-question-api.herokuapp.com/quiz/` + id, {
        method: "DELETE",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json;charset=utf-8",
        },
      });
      window.location = "/quizlist";
    }
  }

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("https://adaptive-question-api.herokuapp.com/quiz/")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.Question);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <QuizListCard>
        <div>
          {items.map((item) => (
            <div key={item.id}>
              <Grid container>
                <Grid item xs={12} md={12} lg={12} className="cardQuizList">
                  <h2 style={{ textAlign: "center" }}> {item.quizName}</h2>
                  <p>{item.quizDescription} </p>
                  <div>
                    <Grid container>
                      <Grid item xs={12} md={4} lg={4}>
                        {" "}
                        <h2 style={{ textAlign: "center" }}>Easy Questions</h2>
                        <div
                          style={{
                            border: "2px solid black",
                            overflowY: "scroll",
                            height: 200,
                          }}
                        >
                          {item.easyQuestions.map((itemEasy) => (
                            <div
                              style={{
                                borderBottom: "1.5px solid black",
                                marginTop: 15,
                              }}
                            >
                              {itemEasy.questionText}
                              <br />
                              Options:
                              {itemEasy.answerOptions.map((itemEasyAns) => (
                                <ul>
                                  <li>
                                    {itemEasyAns.answerText} {"=>"}{" "}
                                    {itemEasyAns.isCorrect === true ? (
                                      <a>True</a>
                                    ) : (
                                      <a>Flase</a>
                                    )}
                                  </li>
                                </ul>
                              ))}
                            </div>
                          ))}
                        </div>
                      </Grid>{" "}
                      <Grid item xs={12} md={4} lg={4}>
                        <h2 style={{ textAlign: "center" }}>
                          Moderate Questions
                        </h2>
                        <div
                          style={{
                            border: "2px solid black",
                            overflowY: "scroll",
                            height: 200,
                          }}
                        >
                          {" "}
                          {item.moderateQuestions.map((itemEasy) => (
                            <div
                              style={{
                                borderBottom: "1.5px solid black",
                                marginTop: 15,
                              }}
                            >
                              {itemEasy.questionText}
                              <br />
                              Options:
                              {itemEasy.answerOptions.map((itemEasyAns) => (
                                <ul>
                                  <li>
                                    {itemEasyAns.answerText} {"=>"}{" "}
                                    {itemEasyAns.isCorrect === true ? (
                                      <a>True</a>
                                    ) : (
                                      <a>Flase</a>
                                    )}
                                  </li>
                                </ul>
                              ))}
                            </div>
                          ))}
                        </div>
                      </Grid>{" "}
                      <Grid item xs={12} md={4} lg={4}>
                        <h2 style={{ textAlign: "center" }}>Hard Questions</h2>
                        <div
                          style={{
                            border: "2px solid black",
                            overflowY: "scroll",
                            height: 200,
                          }}
                        >
                          {item.hardQuestions.map((itemEasy) => (
                            <div
                              style={{
                                borderBottom: "1.5px solid black",
                                marginTop: 15,
                              }}
                            >
                              {itemEasy.questionText}
                              <br />
                              Options:
                              {itemEasy.answerOptions.map((itemEasyAns) => (
                                <ul>
                                  <li>
                                    {itemEasyAns.answerText} {"=>"}{" "}
                                    {itemEasyAns.isCorrect === true ? (
                                      <a>True</a>
                                    ) : (
                                      <a>Flase</a>
                                    )}
                                  </li>
                                </ul>
                              ))}
                            </div>
                          ))}
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                  <div
                    style={{
                      border: "2px solid red",
                      marginTop: 10,
                    }}
                  >
                    <h3 style={{ color: "red", textAlign: "center" }}>
                      {" "}
                      Delete Section
                    </h3>
                    <div>
                      <p style={{ color: "red", textAlign: "center" }}>
                        The deleted Quiz entry cant be retrived{" "}
                      </p>
                    </div>

                    <div
                      style={{
                        overflowY: "scroll",
                        height: 150,
                        display: "flex",
                        justifyContent: "center",
                        margin: 10,
                      }}
                    >
                      {JSON.stringify(items)}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        marginBottom: 10,
                      }}
                    >
                      <ButtonDelete onClick={() => quizDelete(item._id)}>
                        Delete
                      </ButtonDelete>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
          ))}
        </div>
      </QuizListCard>
    );
  }
}
