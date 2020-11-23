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

export const Button = styled.button`
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  border: 2px solid;
  border-radius: 3px;
  padding: 10px;
`;
