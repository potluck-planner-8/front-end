import logo from './logo.svg';
import './App.css';
import HomePage from './components/home-page';
import PotluckForm from './components/potluck-form';
import LoginPage from './components/login-page';
import LoginPageStyle from './components/login-page-style';
import RegisterPage from './components/register-page';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route path='/potluck-form'>
          <PotluckForm />
        </Route>
        <Route path='/login'>
          <LoginPage />
        </Route>
        <Route path='/register'>
          <RegisterPage />
        </Route>
        <Route path='/style'>
          <LoginPageStyle />
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
