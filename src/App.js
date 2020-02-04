import React from 'react';
import { Switch, Route} from 'react-router-dom';
import './App.css';
import LoginPage from './pages/login-page/login-page';
import RegisterPage from './pages/register-page/register-page';
import RecoverpasswordPage from './pages/recover-password-page/recover-password-page';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={LoginPage}/>
        <Route exact path='/register' component={RegisterPage}/>
        <Route exact path='/recoverpassword' component={RecoverpasswordPage}/>
      </Switch>
    </div>
  );
}

export default App;
