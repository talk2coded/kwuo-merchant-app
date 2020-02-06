import React from 'react';
import './loading-state.css';
import Icon from '../../assets/images/Group 16.png';

const LoadingState = () =>(
    <div className="loading-form">
    <div className="form-group">
    <p className="h4 mb-4 loading-header">Let's take you in</p>
    <p className="h4 mb-4 loading-subheader">Request and recieve payments for transactions using kwuo</p>

    <img className="img-fluid loading-img rotating" src={Icon} alt="icon"  />
    </div>
    </div>    
);

export default LoadingState;