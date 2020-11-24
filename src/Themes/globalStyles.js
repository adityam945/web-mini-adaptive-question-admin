import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
  `;

export const LoginCardColor = styled.div`
  .app {
    background: ${({ theme }) => theme.loginCardBg};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.5s linear;
  }
  .main1 {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.loginCardBg};
  }
`;

export const QuizListCard = styled.div`
  .cardQuizList {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.QuizListCard};
    padding: 10px;
    margin-top: 30px;
  }

  .cardQuizList:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  border: 2px solid;
  border-radius: 3px;
  padding: 10px;
`;

export const ButtonDelete = styled.button`
  background: red;
  color: ${({ theme }) => theme.text};
  border: 2px solid;
  border-radius: 3px;
  padding: 10px;
  width: fit-content;
  cursor: pointer;
`;

export const UserListCard = styled.div`
  .cardUserList {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.QuizListCard};
    padding: 10px;
    margin-top: 30px;
  }

  .cardQuizList:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;