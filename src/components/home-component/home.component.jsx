import React from 'react';
import './home.component.css';
import KwuoBal from '../../assets/images/kwuo bal2.png';
import Arrow from '../../assets/images/Arrow 3.png';

const HomeComponent = () => (
  
  
  
       <div className="container-fluid home-comp">
       <div className="row">
           <div className="col-lg-6">
               <div className="kwuo-balance">
               <div className="bg1"></div>
               <div className="bg2">
               <h6>CURRENT KWUO BALANCE</h6>
              <div className="kwuobal"> 
              <span>1000.00</span>
               <img alt="kwuo-bal" src={KwuoBal} className="img-fluid svg"/>
               
               </div>  
               </div>                       
               </div>
           </div>
           
           <div className="col-lg-6">
               <div className="kwuo-balance trans-brk-dwn h5">
                <h5>Transaction breakdown</h5>                      
               </div>
           </div>
       </div>
   </div>
        
       
);

export default HomeComponent;