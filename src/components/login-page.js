import React, { useState, useEffect } from "react";
import * as yup from 'yup';
import schema from './formSchema';
import axios from 'axios';

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
    <div className='login-box'>
      <h2>Login</h2>
      <form id='login-form'onSubmit={formSubmit}>
        <div className='user-box'>
          <input
            id="username"
            value={formValues.username}
            name="username"
            type="text"
            onChange={onChange}
          />
          <label>Username</label>
          { formErrors.username.length > 0 ? <p style={{color: 'orange'}}>{ formErrors.username }</p> : null }
        </div>
        <div className='user-box'>
          <input
            id=""
            value={formValues.password}
            name="name" 
            type="text"
            onChange={onChange}
          />
          <label>Password</label>
          { formErrors.password.length > 0 ? <p style={{color: 'orange'}}>{ formErrors.password }</p> : null }
        </div>
        <div className='user-box'>
          <input
            id="password"
            value={formValues.password}
            name="password" 
            type="password"
            onChange={onChange}
          />
       </div>
       
        {/* <a href='submit-button' type='submit' disabled={disabled}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit!
        </a> */}

      </form>
    </div>
  )
}

export default LoginPage;
