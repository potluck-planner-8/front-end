import { useHistory } from 'react-router';
import axiosWithAuth from '../utils/axiosWithAuth';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledPotluckForm = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-top: 2%;

    .add-button{
        background-color:#C9ADA7;
        padding:1%;
        border-radius:8px;
        font-weight: bold;
        margin: 1%;
    }

    h2{
        font-size:2.44rem;
    }
    form{
        display:flex;
        flex-direction:column;
        align-items:center;
        width:30%;
        background-color: #9EA93F;
        border: 4px solid black;
        border-radius: 16px;
    }
    form input{
        /* width:40%; */
        text-align:center;
    }

    .emojis{
        font-size:4rem;
        margin-top:5%;
    }

    button{
        background-color:white;
    color:black;
    margin:5%;
    padding:1%;
    /* font-size:1.25rem; */
    border-radius:8px;
    font-family:inherit;
    }
`

const initialPotluck = {
    date:"",
    time: "",
    location: "",
    items: []
};

const PotluckForm = ()=> {
  const [potluck, setPotluck] = useState(initialPotluck);
  const [item, setItem] = useState('');
  const {push} = useHistory();


  const handleCreate = (potluck) => {
    //axios call here
    axiosWithAuth()
        .post('https://potluck-planner-8.herokuapp.com/api/potlucks', potluck)
        .then(res=> {
            console.log(res)
        })
        .catch(err=> {
            console.log(err)
        })
    setPotluck(initialPotluck)
    push('/landing')
    
    console.log('submitting potluck to backend!', potluck)
}
    const handleChange = (e)=> {
        setPotluck({
            ...potluck,
            [e.target.name]: e.target.value
        });
    }

    const handleItemChange = (e)=> {
      setItem(e.target.value)
    }
    
    const handleItemPush = (e) => {
      setPotluck({
        ...potluck,
        items: [...potluck.items, item]
      })
      console.log(potluck.items)
      setItem('')
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleCreate(potluck);
    }



    return (
        <StyledPotluckForm>
            <form onSubmit={handleSubmit}>
                <h2>Create your Potluck!</h2>
                    <label>Date</label>
                        <input
                            value={potluck.date}
                            id="date"
                            type='date'
                            name="date"
                            onChange={handleChange}
                        />
                    
                    <label>Time</label>
                        <input
                            value={potluck.time}
                            id="time"
                            type='time'
                            name="time"
                            onChange={handleChange}
                        />
                    <label>Location</label>
                        <input
                            value={potluck.location}
                            id="location"
                            name="location"
                            onChange={handleChange}
                        />
                    <label>Item</label>
                        <input
                            value={item}
                            id="item"
                            name="item"
                            onChange={handleItemChange}
                        />    
                <span onClick={handleItemPush} className='add-button'>Add Item</span>
                <label>My Items:</label>
                {potluck.items.map(item => {
                    return (<div>{item}</div>)
                })}
                <button type='submit'>Submit</button>
            </form>
            <span className='emojis'>🦃🍂🥧</span>
        </StyledPotluckForm>
    );
}

export default PotluckForm;

