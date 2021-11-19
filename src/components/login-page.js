import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import * as yup from "yup";
import schema from "./formSchema";
import axios from "axios";

const LoginPage = (props) => {
  const initialFormValues = {
    username: "",
    password: "",
  };

  const initialFormErrors = {
    username: "",
    password: "",
  };

  const initialDisabled = true;

  const history = useHistory();

  //const [users, setUsers] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  // const validate = (name, value) => {
  //   yup
  //     .reach(schema, name)
  //     .validate(value)
  //     .then(() => setFormErrors({ ...formErrors, [name]: "" }))
  //     .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  // };

  useEffect(() => {
    console.log(formErrors);
  }, [formErrors]);

  const onChange = (e) => {
    const { name, value } = e.target;
    //validate(name, value);
    setFormValues({ ...formValues, [name]: value });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    const user = {
      username: formValues.username.trim(),
      password: formValues.password.trim(),
    };

    axios
      .post("https://potluck-planner-8.herokuapp.com/api/auth/login", user)
      .then((r) => {
        localStorage.setItem("token", r.data.token);
        console.log(r.data);
        //setUsers([r.data, ...users]);
        //setFormValues(initialFormValues);
        history.push("/landing");
      })
      .catch((err) => {
        console.error(err);
        //setFormValues(initialFormValues);
      });
  };

  // useEffect(() => {
  //   schema.isValid(formValues).then((valid) => setDisabled(!valid));
  // }, [formValues]);

  return (
    <div className="login-box">
      <h2>Login</h2>
      <form id="login-form" onSubmit={formSubmit}>
        <div className="user-box">
          <label>
            Username
            <input
              id="username"
              value={formValues.username}
              name="username"
              type="text"
              onChange={onChange}
            />
          </label>
          {formErrors.username.length > 0 ? (
            <p style={{ color: "orange" }}>{formErrors.username}</p>
          ) : null}
        </div>
        <div className="user-box">
          <label>
            Password
            <input
              id=""
              value={formValues.password}
              name="password"
              type="password"
              onChange={onChange}
            />
          </label>
          {formErrors.password.length > 0 ? (
            <p style={{ color: "orange" }}>{formErrors.password}</p>
          ) : null}
        </div>
        <button type="submit">submit</button>

        {/* <a href='submit-button' type='submit' disabled={disabled}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit!
        </a> */}
      </form>
    </div>
  );
};

export default LoginPage;
