import React from 'react';
import { Switch, Route} from 'react-router-dom';
import './App.css';
import LoginPage from './pages/login-page/login-page';
import RegisterPage from './pages/register-page/register-page';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={LoginPage}/>
        <Route exact path='/register' component={RegisterPage}/>
      </Switch>
    </div>
  );
}

export default App;
