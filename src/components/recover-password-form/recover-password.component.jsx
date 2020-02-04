import React from 'react';
import './recover-password.css';

const RecoverpasswordForm = () =>(
    <div className="reg-form">
        <form className="text-center border border-light p-5">
        <div className="form-group">
        <p className="h4 mb-4 rec-header">Get a new password</p>
        <p className="h4 mb-4 regform-subheader">We're sorry that you couldn't Log in. Let's help you retrieve it.</p>
        </div>

        <div className="form-row mb-4">
        <div className="svgz col-xl-6 col-md-6 position-relative">
        
        <input id="phone" className="input-rec" placeholder="Phone number"  required="required" />
        <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg" id="img">
        <path fill-rule="evenodd" clip-rule="evenodd" id="path" d="M16.0428 27.2358L16.0548 27.2431C18.1906 28.6128 20.9847 28.3044 22.7748 26.5012L23.5308 25.7399C24.2335 25.0322 24.2335 23.8849 23.5308 23.177L20.3484 19.9725C19.6456 19.2649 18.5062 19.2649 17.8032 19.9725C17.4657 20.3127 17.0076 20.5038 16.53 20.5038C16.0524 20.5038 15.5944 20.3127 15.2568 19.9725L10.164 14.8468C9.46133 14.1391 9.46133 12.9918 10.164 12.2839C10.5018 11.944 10.6916 11.4828 10.6916 11.0019C10.6916 10.521 10.5018 10.0598 10.164 9.71984L6.98161 6.51655C6.27871 5.80898 5.13931 5.80898 4.43641 6.51655L3.68041 7.27659C1.88964 9.07922 1.58329 11.8927 2.94361 14.0432L2.95081 14.0553C6.43856 19.2507 10.8827 23.7248 16.0428 27.2358Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M14.6988 9.96875C17.6812 9.96875 20.0988 12.4032 20.0988 15.4063" stroke="black" id="path" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M14.6988 5.4375C17.3244 5.4375 19.8426 6.48777 21.6991 8.35728C23.5558 10.2268 24.5988 12.7624 24.5988 15.4063" id="path" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M14.6988 0.90625C22.6517 0.90625 29.0988 7.39812 29.0988 15.4063" stroke="black" stroke-width="1.5"  stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <br/>
        </div>

        <div className="d-flex justify-content-left">
        <button className=" rec-btn btn  btn-block my-4" type="submit" id="submit" >Continue</button> 
        </div>
        
    </div>

       

        
        
       </form>
    </div>

    
);

export default RecoverpasswordForm;