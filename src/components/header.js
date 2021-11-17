import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledHeader = styled.header`
    background-color: #C9ADA7;

    h1{
        margin:0;
        text-decoration: underline;
        padding:1%;
        font-size: 3.05rem;
        text-align:left;
    }
`

const Header = (props) => {
    return (
        <StyledHeader>
            <h1>BloomTech's Potluck</h1>
        </StyledHeader>   
    )
}

export default Header;