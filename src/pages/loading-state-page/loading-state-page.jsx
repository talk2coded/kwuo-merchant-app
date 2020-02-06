import React from 'react';
import FormImage from '../../components/form-image/form-image.component';
import LoadingState from '../../components/loading-form/loading-state';
import './loading-state-page.css';

const LoadingPage = () =>(
    <div className="container-fluid">
        <div className="row">
            <div className="col-xl-6 col-lg-6">
                <FormImage/>
            </div>
            <div className="col-xl-6 col-lg-6">
                <LoadingState/>
            </div>
        </div>
        </div>    

);

export default LoadingPage;