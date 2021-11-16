import React, { useState, useEffect } from "react";
import * as yup from 'yup';
import schema from './formSchema';
import axios from 'axios';
import styled from 'styled-components';

const StyledLoginDiv = styled.div`
  font-family: 'Quicksand', sans-serif;
  display:flex;
  flex-direction:column;
  align-items: center;

  h2{
    font-size: 2.44rem;
    /* text-align:left; */
    margin-left: 5%;
  }

  form{
    background-color: #9EA93F;
    border: 4px solid black;
    border-radius:16px;
    width: 25%;
    padding-bottom:2%;
    margin: 2%;
    display:flex;
    flex-direction:column;
    
  }
  form input{
    text-align:left;
    /* width:50%; */
    margin: 0 5%;
    font-size: 1.25rem;
    margin-bottom: 2%;
    padding:1%;
    border-radius: 8px; 
  }

  button{
    background-color:black;
    color:white;
    /* width:50%; */
    margin:0 5%;
    padding:1%;
    font-size:1.25rem;
    border-radius:8px;
  }


`;

const initialFormValues = {
    username: '',
    password: ''
}

const initialFormErrors = {
  username: '',
  password: ''
}

const initialDisabled = true

const LoginPage = (props) => {

  const [users, setUsers] = useState([])  
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled) 

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  console.log(formErrors);

  const postUser = newUser => {
    axios.post('https://potluck-planner-8.herokuapp.com/api/users', newUser)
      .then(r => {
        setUsers([r.data, ...users]);
        setFormValues(initialFormValues);
      }) 
      .catch(err => {
        console.error(err);
        setFormValues(initialFormValues);
      })
  }

  const onChange = e => {
    const { name, value } = e.target;
    validate(name, value)
    setFormValues({ ...formValues, [name] : value});
  }

  const formSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      username: formValues.username.trim(),
      password: formValues.password.trim()
    }

    postUser(newUser)
    
    return setUsers()
  }
  
  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])
  
  return (
    <StyledLoginDiv>
      
      <form id='login-form' onSubmit={formSubmit}>
        <h2>Login</h2>
          { formErrors.username.length > 0 ? <p style={{color: 'orange', align:'right'} }>{ formErrors.username }</p> : null }
          <input
            id="username"
            placeholder='username'
            value={formValues.username}
            name="username"
            type="text"
            onChange={onChange}
          />
          {/* <label>Username</label> */}

          <input
            id=""
            placeholder='password'
            value={formValues.password}
            name="name" 
            type="password"
            onChange={onChange}
          />
          {/* <label>Password</label> */}
          { formErrors.password.length > 0 ? <p style={{color: 'orange'}}>{ formErrors.password }</p> : null }
        <div className='user-box'>
          {/* <input
            id="password"
            value={formValues.password}
            name="password" 
            type="password"
            onChange={onChange}
          /> */}
        </div>
        <button>Sign in!</button>
       
        {/* <a href='submit-button' type='submit' disabled={disabled}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit!
        </a> */}

      </form>
    </StyledLoginDiv>
  )
}

export default LoginPage;
