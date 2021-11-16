import "./App.css";
import HomePage from "./components/home-page";
import PotluckForm from "./components/potluck-form";
import LoginPage from "./components/login-page";
import LoginPageStyle from "./components/login-page-style";
import RegisterPage from "./components/register-page";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header";

function App() {
  return (
    <div className="App">
      <Header />
      <Router> 
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/potluck-form">
              <PotluckForm />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/register">
              <RegisterPage />
            </Route>
            <Route path="/style">
              <LoginPageStyle />
            </Route>
          </Switch>  
      </Router>
    </div>
  );
}

export default App;
