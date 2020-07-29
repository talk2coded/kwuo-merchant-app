import React from 'react';
import { Switch, Route} from 'react-router-dom';
import './App.css';
import LoginPage from './pages/login-page/login-page';
import RegisterPage from './pages/register-page/register-page';
import RecoverpasswordPage from './pages/recover-password-page/recover-password-page';
import LoadingPage from './pages/loading-state-page/loading-state-page';
import HomePage from './pages/home-page/home-page';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={LoginPage}/>
        <Route exact path='/register' component={RegisterPage}/>
        <Route exact path='/recoverpassword' component={RecoverpasswordPage}/>
        <Route exact path='/loading' component={LoadingPage}/>
        <Route exact path='/home' component={HomePage}/>
      </Switch>
    </div>
  );
}

export default App;
