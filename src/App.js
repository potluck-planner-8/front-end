import logo from './logo.svg';
import './App.css';
import HomePage from './components/home-page';
import PotluckForm from './components/potluck-form';
import LoginPage from './components/login-page';
import LoginPageStyle from './components/login-page-style';
import RegisterPage from './components/register-page';

function App() {
  return (
    <div className="App">
      <HomePage />
      <PotluckForm />
      <LoginPage />
      <RegisterPage />
      <LoginPageStyle />
    </div>
  );
}

export default App;
