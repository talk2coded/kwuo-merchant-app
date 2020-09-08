import React from 'react';
import './success-notification.css';
import icon from '../../assets/images/Union.png';

class SuccessNotification extends React.Component{
    render(){
        return(
            <div>
                <div className="success-container">
                        <img src={icon} alt="icon" className="img-fluid"/>
                        <h6>Successful</h6>
                    </div>
            </div>
        )
    }
};

export default SuccessNotification;