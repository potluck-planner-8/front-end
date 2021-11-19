import React, { useState} from "react";
import { useHistory } from "react-router";
import axios from "axios";
import styled from "styled-components";

const StyledLoginDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #474b24;

  h2 {
    font-size: 2.44rem;
    /* text-align:left; */
    margin-left: 5%;
  }

  form {
    background-color: #9ea93f;
    border: 4px solid black;
    border-radius: 16px;
    width: 25%;
    padding-bottom: 2%;
    margin: 2%;
    display: flex;
    flex-direction: column;
  }
  form input {
    text-align: left;
    box-sizing: border-box;
    max-width: 90%;
    /* width:50%; */
    margin: 0 5%;
    font-size: 1.25rem;
    margin-bottom: 2%;
    padding: 1%;
    border-radius: 8px;
  }

  button {
    background-color: black;
    color: white;
    /* width:50%; */
    margin: 0 5%;
    padding: 1%;
    font-size: 1.25rem;
    border-radius: 8px;
    font-family: inherit;
  }
  .turkey {
    background-color: rgba(255, 255, 255, 0.7);
  }
`;

const LoginPage = (props) => {
  const initialFormValues = {
    username: "",
    password: "",
  };

  // const initialFormErrors = {
  //   username: "",
  //   password: "",
  // };

  // const initialDisabled = true;

  const history = useHistory();

  //const [users, setUsers] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  // const [formErrors, setFormErrors] = useState(initialFormErrors);
  // const [disabled, setDisabled] = useState(initialDisabled);

  // const validate = (name, value) => {
  //   yup
  //     .reach(schema, name)
  //     .validate(value)
  //     .then(() => setFormErrors({ ...formErrors, [name]: "" }))
  //     .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  // };

  // useEffect(() => {
  //   console.log(formErrors);
  // }, [formErrors]);

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
    <StyledLoginDiv>
      <form id="login-form" onSubmit={formSubmit}>
        <h2>Login</h2>
        <div className="user-box">
          <input
            id="username"
            value={formValues.username}
            name="username"
            type="text"
            onChange={onChange}
            placeholder="username"
          />

          {/* {formErrors.username.length > 0 ? (
            <p style={{ color: "orange" }}>{formErrors.username}</p>
          ) : null} */}
        </div>
        <div className="user-box">
          <input
            id=""
            value={formValues.password}
            name="password"
            type="password"
            onChange={onChange}
            placeholder="password"
          />

          {/* {formErrors.password.length > 0 ? (
            <p style={{ color: "orange" }}>{formErrors.password}</p>
          ) : null} */}
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
      <h2 className="turkey">Turkey day is around the corner!</h2>
    </StyledLoginDiv>
  );
};

export default LoginPage;
