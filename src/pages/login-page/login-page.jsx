import React from 'react';
import FormImage from '../../components/form-image/form-image.component';
import LoginForm from '../../components/login-form/login-form.component';
import './login-page.css';

const LoginPage = () =>(
   <div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6">
                    <FormImage/>
                </div>
                <div className="col-md-6">
                    <LoginForm/>
                </div>
            </div>
        </div>
   </div>
);

export default LoginPage;