import React from "react";
import LoginPage from './login-page';
import RegisterPage from './register-page';
import { Link } from "react-router-dom";

const HomePage = (props) => {
  return <div>
    <h1>Welcome to the Potluck Planner!</h1>
    <Link to='login'> Login </Link>
    <Link to='register'> Register </Link>
    </div>
  ;
};

export default HomePage;
