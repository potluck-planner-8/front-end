import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  background-image: linear-gradient(#474b24, #9ea93f);
  letter-spacing: 9px;
  h1 {
    margin: 0;
    padding: 1%;
    font-size: 3.05rem;
    text-align: left;
    font-family: "Cinzel", serif;
    color: white;
  }
`;

const Header = (props) => {
  return (
    <StyledHeader>
      <h1>Potluck Planner</h1>
    </StyledHeader>
  );
};

export default Header;
