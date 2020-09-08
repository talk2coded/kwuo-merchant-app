import React from 'react';
import './buy-kwuo-unit-processing.css';
import icon from '../../assets/images/Group 16.png';

class ProcessingKwuo extends React.Component {
    processing(){
        document.getElementById("withdraw").style.display = "none";
        document.getElementById("processing").style.display = "block";
    };

    render(){
        return(
            <div>
              {/*withdrawal-section*/}
              
              <div className="withdrawal-container" id="withdraw">
              <div className="right-text">
                  <h5>Buy Kwuo units</h5>
                  <h6>Get more value for your money</h6>
                
              </div>
              <div className="center-text">
                <h3>How much units do you want to purchase ?</h3>
                <input type="text"/><br/><br/><br/><br/>
                <div>
                  <a href="#">Use a different card</a>
                </div>
                <div className="buy-btn">
                  <a href="#" className="buy" onClick={this.processing}>Buy</a>
                </div>
                
              </div>
            </div>

            {/*processing-section*/}

            <div className="processing-container" id="processing">
                   <img src={icon} alt="icon" className="img-fluid rotating"/>
                   <h5>Processing.....</h5>
            </div>

            </div>
            
    
        )
    }
};

export default ProcessingKwuo;