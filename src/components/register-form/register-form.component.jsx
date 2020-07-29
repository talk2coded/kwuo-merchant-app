import React from 'react';
import { Link } from 'react-router-dom';
import './register-form.css';


class RegisterForm extends React.Component{
        constructor(props){
            super(props);

            this.state ={
                firstname: "",
                lastname: "",
                phoneno: "",
                email: "",
                password: "",
            }
        }



        handleFirstnameChange = evt =>{
            this.setState({ firstname: evt.target.value });
            let value = evt.target.value;
            let fname=document.getElementById('fname');
            let svg=document.getElementById('svg1');
            var alph = /^[a-zA-Z]+$/;

            if( value.match(alph)){
                fname.style.border = '2px solid #006A30';
                svg.style.stroke = '#006a30';

            }else{
                fname.style.border = '2px solid #FF3A44';
                svg.style.stroke = '#ff3a44';
            }
            
        };

        handleLastnameChange = evt =>{
            this.setState({ lastname: evt.target.value });
            let value = evt.target.value;
            let lname=document.getElementById('lname');
            let svg=document.getElementById('svg2');var alph = /^[a-zA-Z]+$/;
            var alph = /^[a-zA-Z]+$/;

            if( value.match(alph)){
                lname.style.border = '2px solid #006A30';
                svg.style.stroke = '#006a30';

            }else{
                lname.style.border = '2px solid #FF3A44';
                svg.style.stroke = '#ff3a44';
            }
            
        };

        handlePhonenumberChange = evt =>{
            this.setState({ phoneno: evt.target.value});
            let value = evt.target.value;
            let phone=document.getElementById('phone');
            let svg=document.getElementById('svg3');
       
        if (isNaN(value) || value.length < 11 || value.length > 11 || value.length === 0){
                      phone.style.border = '2px solid #FF3A44';
                      svg.style.stroke = '#ff3a44';
                      
               
                      
                   }else if(value.length === 11){
                     phone.style.border = '2px solid #006A30';
                     svg.style.stroke = '#006a30';
                   
                    
                 }

        };

        handleEmailChange = evt => {
            this.setState({ email: evt.target.value});
            let value = evt.target.value;
            let email =document.getElementById('email');
            let svg =document.getElementById('svg4');
            let re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            if( value.match(re)){
                email.style.border = '2px solid #006A30';
                svg.style.stroke = '#006a30';   
            }else{
                email.style.border = '2px solid #FF3A44';
                svg.style.stroke = '#ff3a44';
            }

        };

         handlePasswordChange = evt => {
        this.setState({ password: evt.target.value });
        let value = evt.target.value;
        let password=document.getElementById('password');
        let svg=document.getElementById('svg5');
       
        if(value.length < 6 ){
            password.style.border = '2px solid #ff3a44';
             svg.style.stroke = '#ff3a44';
                   
             }else if(value.length >= 6){
             password.style.border = '2px solid #006A30';
             svg.style.stroke = '#006a30';

                };
      };

       canBeSubmitted() {
        const { phoneno, password, firstname, lastname, email } = this.state;
        let alph = /^[a-zA-Z]+$/;
         let re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            
        return (
          phoneno.length === 11 &&
          password.length > 5 && 
          ( firstname.match(alph)) &&
          ( lastname.match(alph)) &&
          ( email.match(re))

            );
      }
    
      handleSubmit = (evt) => {
        
        if (!this.canBeSubmitted()) {
          evt.preventDefault();
          return;
        }
        // actual submit logic...
      };

    render(){
               
        const isEnabled = this.canBeSubmitted();
        return(
     
  <div className="reg-form">        
          
        <form className="text-center border border-light p-5" onSubmit={this.handleSubmit}>

        <div className="form-group">
        <p className="h4 mb-4 reg-header">Become a Merchant</p>
        <p className="h4 mb-4 reg-subheader">Request and recieve payments for transactions using kwuo</p>
        </div>

        <div className="form-row mb-4">
            <div className=" svg col-xl-6 col-md-6 position-relative">
            
                <input type="text" id="fname" className="input-reg" required="required" placeholder="First name" value={this.state.firstname} onChange={this.handleFirstnameChange}/>
                <svg width="25" height="28" viewBox="0 0 25 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="svg1" d="M24 27C23.2256 21.2132 18.3108 16.8943 12.5 16.8943C6.68921 16.8943 1.77438 21.2132 1 27M12.5 14C16.0726 14 18.9688 11.0898 18.9688 7.49999C18.9688 3.91015 16.0726 1 12.5 1C8.92741 1 6.03125 3.91015 6.03125 7.49999C6.03125 11.0898 8.92741 14 12.5 14Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <br/>
                
            </div>
            <div className="svg col-xl-6  col-md-6  position-relative">
            
                <input type="text" id="lname" className=" input-reg" placeholder="Last name" required="required" value={this.state.lname} onChange={this.handleLastnameChange}/>
                <svg width="25" height="28" viewBox="0 0 25 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="svg2" d="M24 27C23.2256 21.2132 18.3108 16.8943 12.5 16.8943C6.68921 16.8943 1.77438 21.2132 1 27M12.5 14C16.0726 14 18.9688 11.0898 18.9688 7.49999C18.9688 3.91015 16.0726 1 12.5 1C8.92741 1 6.03125 3.91015 6.03125 7.49999C6.03125 11.0898 8.92741 14 12.5 14Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            
        </div>

        <div className="form-row mb-4">
            <div className="svg col-xl-6 col-md-6 position-relative">
            
            <input id="phone" className="input-reg" placeholder="Phone number"  required="required" value={this.state.phoneno} onChange={this.handlePhonenumberChange}/>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="svg3" fill-rule="evenodd" clip-rule="evenodd" d="M15.0429 22.2358L15.0549 22.2431C17.1906 23.6128 19.9847 23.3044 21.7749 21.5012L22.5309 20.7399C23.2336 20.0322 23.2336 18.8849 22.5309 18.177L19.3485 14.9725C18.6456 14.2649 17.5062 14.2649 16.8033 14.9725C16.4657 15.3127 16.0077 15.5038 15.5301 15.5038C15.0525 15.5038 14.5944 15.3127 14.2569 14.9725L9.16408 9.84679C8.46139 9.13907 8.46139 7.99176 9.16408 7.28392C9.50189 6.94397 9.69169 6.48279 9.69169 6.00189C9.69169 5.52098 9.50189 5.05978 9.16408 4.71984L5.98168 1.51655C5.27878 0.808976 4.13938 0.808976 3.43648 1.51655L2.68048 2.27659C0.889704 4.07922 0.583356 6.89273 1.94368 9.04325L1.95088 9.05533C5.43862 14.2507 9.88276 18.7248 15.0429 22.2358Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <br/>
            </div>
            <div className="svg col-xl-6 col-md-6 position-relative">
            
            <input type="email" id="email" className="input-reg mb-4 input-reg" placeholder="E-mail" required="required" value={this.state.email} onChange={this.handleEmailChange}/>
            <svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="svg4" d="M26.2248 3.46898e-10H1.77524C1.30442 3.46899e-10 0.852877 0.19134 0.519955 0.531928C0.187033 0.872516 0 1.33445 0 1.81612V18.1839C0 18.6655 0.187033 19.1275 0.519955 19.4681C0.852877 19.8087 1.30442 20 1.77524 20H26.2248C26.6956 20 27.1471 19.8087 27.48 19.4681C27.813 19.1275 28 18.6655 28 18.1839V1.80477C27.9971 1.32507 27.8087 0.866046 27.4761 0.527909C27.1435 0.189772 26.6937 -9.36897e-06 26.2248 3.46898e-10ZM26.9415 1.81612V17.6731L18.5646 9.09194L26.9371 1.73439C26.9393 1.7639 26.9415 1.78434 26.9415 1.80477V1.81612ZM1.05848 17.6095V1.80477C1.05848 1.79115 1.05848 1.7798 1.05848 1.76617L9.38659 9.08059L1.05848 17.6095ZM1.88397 1.07378H26.0872L13.9867 11.6981L1.88397 1.07378ZM1.77524 18.9035C1.63821 18.9046 1.5039 18.8643 1.38913 18.7877L10.1943 9.78207L13.645 12.8127C13.7402 12.896 13.8614 12.9418 13.9867 12.9418C14.112 12.9418 14.2332 12.896 14.3284 12.8127L17.7657 9.79342L26.5776 18.8082C26.4702 18.8712 26.3485 18.904 26.2248 18.9035H1.77524Z" fill="#231F20"/>
            </svg>
            </div>
        </div>

        <div className="form-row mb-4">
        <div className="svg col-xl-7 position-relative">
        <input type="password" id="password" className="input-reg" placeholder="Password" aria-describedby="defaultRegisterFormPasswordHelpBlock" required="required" value={this.state.password} onChange={this.handlePasswordChange}/>
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="svg5" d="M3.47754 26.25L26.915 3.75" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path id="svg5" d="M11.2036 23.815C12.4326 24.1962 13.7131 24.3851 14.9999 24.375C20.1249 24.46 25.3224 20.8575 28.5299 17.3275C29.2431 16.5376 29.2431 15.3361 28.5299 14.5462C27.3682 13.2708 26.0809 12.1158 24.6874 11.0987" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path id="svg5" d="M18.0162 7.8525C17.0296 7.60839 16.0162 7.48996 14.9999 7.5C9.95994 7.4175 4.74994 10.94 1.47244 14.545C0.759187 15.3349 0.759187 16.5364 1.47244 17.3263C2.46522 18.4174 3.55005 19.4211 4.71494 20.3263" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path id="svg5" d="M10.311 15.9375C10.311 14.6941 10.8051 13.5016 11.6844 12.6225C12.5638 11.7434 13.7564 11.2497 14.9998 11.25" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path id="svg5" d="M19.6863 15.9362V15.9362C19.6866 17.1795 19.193 18.3719 18.3142 19.2512C17.4354 20.1305 16.2432 20.6247 15 20.625" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

       
        </div>
        <div className="col">
        </div>
    </div>

    <div className="d-flex justify-content-left buttons">
    <Link to="/" className="register">Already a Merchant? Sign In</Link> <button className=" reg-btn btn  btn-block my-4" type="submit" id="submit" disabled={!isEnabled} >Register</button>
    </div>

        </form>

</div>

        )
    }

}

export default RegisterForm;
