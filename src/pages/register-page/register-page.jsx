import React from 'react';
import FormImage from '../../components/form-image/form-image.component';
import RegisterForm from '../../components/register-form/register-form.component';
import './register-page.css';

const RegisterPage = () => (
    <div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-xl-6 col-lg-12">
                    <FormImage/>
                </div>
                <div className="col-xl-6 col-lg-12">
                    <RegisterForm/>
                </div>
            </div>
        </div>
    </div>
);

export default RegisterPage;