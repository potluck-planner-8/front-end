import "./App.css";
import HomePage from "./components/home-page";
import PotluckForm from "./components/potluck-form";
import LoginPage from "./components/login-page";
import RegisterPage from "./components/register-page";
import Landing from "./components/landing";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header";

function App() {
  return (

    <Router>
      <div className="App">
        <Header />
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
          <Route path='/landing'>
            <Landing />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
