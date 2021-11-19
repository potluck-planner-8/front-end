import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import photo from "../Photos/Eating.jpg";

const StyledHome = styled.div`
  height: 100vh;
  background-image: url(${photo});
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.8;
  background-attachment: fixed;

  h1 {
    color: white;
    padding: 20%;
    font-size: 3rem;
    margin: 0;
  }
  .home {
    font-size: 1.2rem;
    text-decoration: none;
    color: white;
    border: 2px solid #9ea93f;
    border-radius: 30px;
    padding: 1%;
    margin: 10% 5%;
    background: #9ea93f;
    opacity: 0;
  }
`;
const HomePage = (props) => {
  return (
    <StyledHome>
      <h1>Welcome to the Potluck Planner!</h1>
      <Link to="login" className="home">
        {" "}
        Login{" "}
      </Link>
      <Link to="register" className="home">
        {" "}
        Register{" "}
      </Link>
    </StyledHome>
  );
};

export default HomePage;
