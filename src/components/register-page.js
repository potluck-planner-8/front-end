import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';
import * as yup from 'yup';
import schema from './formSchemaRegister';

const initialFormValues = {
  name: '',
  email: '',
  username: '',
  password: '',
  role_name: ''
}

const initialFormErrors = {
  name: '',
  email: '',
  username: '',
  password: '',
  role_name: ''
}

const initialDisabled = true;
const initialUsers = [];

const RegisterPage = () => {

  const history = useHistory();
  const [users, setUsers ] = useState(initialUsers);
  const [formValues, setFormValues] = useState  (initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const {role_name} = users;
  
  const postNewUser = newUser => {
    axios.post('https://potluck-planner-8.herokuapp.com/api/auth/register', users)
      .then(r => {
        setUsers([r.data, ...users]);   
        setFormValues(initialFormValues);
      }).catch(err => {
        console.error(err);
        setFormValues(initialFormValues);
      })
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
       .validate(value)
       .then(() => setFormErrors({ ...formErrors, [name]: '' }))
       .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  useEffect(() => {
      schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const onChange = evt => {
    const { name, value } = evt.target;
    const valueToUse = value;
    inputChange(name, valueToUse);
  }

  const formSubmit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      username: formValues.username.trim(),
      password: formValues.password.trim(),
      role_name: formValues.role_name.trim()
    }
    postNewUser(newUser);   
  }

  const onSubmit = event => {
    event.preventDefault()
    formSubmit()
  }
    
  return (
    <div className="register-box">
      <header>
        <h1>Register</h1>
      </header>
      <form id="register-form" onSubmit={formSubmit}>
        <div>
          <label>Full Name: </label>
            <input
              id="name-input"
              name="name"
              tyonChange={onChange}
            />
        </div>
        <br></br>
        <div>
          <label>Email: </label>
            <input
              id="email-input"
              name="email" 
              type="text" 
              onChange={onChange} 
            />
        </div>
        <br></br>
        <div>
          <label>Username: </label>
            <input 
              id="username-input" 
              name="username" 
              type="text" 
              onChange={onChange} 
            />
        </div>
        <br></br>
        <div>
          <label>Password: </label>
            <input 
              id="password-input" 
              name="password" 
              type="password" 
              onChange={onChange} 
            />
        </div>
        <br></br>
        <div>
          <label>What Are You?</label>
            <select 
              id='role-dropdown' 
              name='role_name' 
              value={role_name} 
              onChange={onChange}>
                <option value=''>Select a role</option>
                <option value='organizer'>Organizer</option>
                <option value='guest'>Guest</option>
            </select>
        </div>
        <br></br>
        <br></br>
        <div>
          <button 
            id="submit-button" 
            type="submit" 
            disabled={disabled}>SUBMIT!!
          </button>
        </div>
      </form>
    </div>
  )
}

export default RegisterPage;
