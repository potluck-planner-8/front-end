import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';
import styled from 'styled-components';

const StyledLanding = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-top:2%;


    button{
        padding:1%;
        font-family: inherit;
        font-size:1.6rem;
        color:black;
        font-weight:bold;
        background-color:white;
        border-radius:8px;
        border: 2px solid black;
    }
    .potluck-list{
        background-color: #9EA93F;
        padding: 2% 5%;
        margin-top:2%;
        border: 4px solid black;
        border-radius: 16px;
    }
    h2{
        font-size:1.76rem;
    }
    h3{
        margin-bottom:0;
        font-size:1.44rem; 
    }

    h4{
        font-size: 1rem;
        margin-top: 0;  
    }
    .emojis{
        font-size:4rem;
        margin-top:2%;
    }
`;

const Landing = (props) => {
    const [potlucks, setPotlucks] = useState([]);

    useEffect(() => {
        axiosWithAuth()
            .get('https://potluck-planner-8.herokuapp.com/api/potlucks')
            .then(res=>{
                console.log(res)
            setPotlucks(res.data)
            })
            .catch(err=>{
            console.log(err)
            })
    }, [])

    return (
        <StyledLanding>
        <Link to='/potluck-form'><button>Create Your Own Potluck!</button></Link>
            <div className='potluck-list'>
                <h2>Here are the currently scheduled Potlucks: </h2>
                {potlucks.map( potluck => {
                    return(
                        <div>
                        <h3>{potluck.location} </h3>
                        <h4>{potluck.date + ' at '}
                        {potluck.time}</h4>
                        </div>
                    )
                })}
            </div>
            <p className='emojis'>🦃🍂🥧</p>
        </StyledLanding>
    )
}

export default Landing;