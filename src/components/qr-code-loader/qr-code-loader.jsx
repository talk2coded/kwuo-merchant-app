import React from 'react';
import './qr-code-loader.css';
import icon from '../../assets/images/Group 16.png';

class QrcodeLoader extends React.Component{

    rotateIcon(){
        document.getElementById("icon").classList.add("rotating");
    }
      

    render(){
        return(
            <div>
            <div className="qr-code-container">
            <img className="img-fluid qr-icon" src={icon} alt="icon" id="icon"/><br/><br/>
            <h6 className="qrcode-text">Generating QR code</h6>
          
        </div><br/><br/>
        <button onClick={this.rotateIcon} className="qr-btn"> <h6 className="qrcode-text">Generating QR code</h6></button><br/><br/>
        <p className="qr-text">
        Share this with your customers and friends and 
        get paid in seconds
        </p>
            </div>
        )
    }
};

export default QrcodeLoader;