import React from 'react';
import RecoverpasswordForm from '../../components/recover-password-form/recover-password.component';
import FormImage from '../../components/form-image/form-image.component';
import './recover-password-page.css';

const RecoverpasswordPage = () =>(
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-xl-6 col-lg-6'>
                <FormImage/>
            </div>
            <div className='col-xl-6 col-lg-6'>
                <RecoverpasswordForm/>
            </div>
        </div>
    </div>
);

export default RecoverpasswordPage;