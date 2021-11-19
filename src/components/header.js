import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledHeader = styled.header`
    background-image: linear-gradient(#474B24, #9EA93F);
    letter-spacing: 9px;
    margin:0%;
    h1{
        margin:0;
        padding:1%;
        font-size: 3.05rem;
        text-align:left;
        font-family: 'Cinzel', serif;
        color:white;
        
    }
`

const Header = (props) => {
    return (
        <StyledHeader>
            <h1>Potluck Planner</h1>
        </StyledHeader>   
    )
}

export default Header;