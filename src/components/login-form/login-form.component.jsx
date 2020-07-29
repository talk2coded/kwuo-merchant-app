import React from 'react';
import { Link } from 'react-router-dom';
import './login-form.css';

class LoginForm extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            phoneno: "",
            password: "",
            loader: true
        };
      
        
    }



    // handleSubmit = event =>{
    //     let nam = event.target.name;
    //     let nam2 = event.target.name;
    //     let val = event.target.value;
    //     let val2 = event.target.value;
    //     let btn = document.getElementById('submit');
    //     if(nam === "phoneno"){
    //         if(isNaN(val) || val.length < 11 || val.length > 11){
    //             console.log('empty');
    //         }
    //     }


        
    //     this.setState({[nam]: val}); 

    // }

    //  handleChange = event => {
    //     let nam = event.target.name;
    //     let nam2 = event.target.name;
    //     let val = event.target.value;
    //     let val2 = event.target.value;
    //     let border=document.getElementById('input1');
    //     let border2 =document.getElementById('input2');
    //     let svg=document.getElementById('path');
    //     let svg2=document.getElementById('path2');
    //     let btn = document.getElementById('submit');
    //     if (nam === "phoneno") {
            
    //       if (isNaN(val) || val.length < 11 || val.length > 11 || val.length === 0){
    //          border.style.border = '2px solid #FF3A44';
    //          svg.style.stroke = '#ff3a44';
            
             
             
             
    //       }else if(val.length === 11){
    //         border.style.border = '2px solid #006A30';
    //         svg.style.stroke = '#006a30';
           
            
    //       }
    //     };

    //     if (nam2 === "pass"){
    //         if(val2.length < 6 ){
    //             border2.style.border = '2px solid #ff3a44';
    //             svg2.style.stroke = '#ff3a44';
              
              
                
    //         }else if(val2.length >= 6){
    //             border2.style.border = '2px solid #006A30';
    //             svg2.style.stroke = '#006a30';
              


    //         };

            
    //     };
        
    //     this.setState({[nam]: val});
    // }

    // // handleSubmit = () => {
    // //     const { email, password } = this.state;
    // //     alert(`Signed up with email: ${email} password: ${password}`);
    // //   };
    
    handlePhoneChange = evt => {
        this.setState({ phoneno: evt.target.value });
       let val = evt.target.value;
       let border=document.getElementById('input1');
        let svg=document.getElementById('path');
       
        if (isNaN(val) || val.length < 11 || val.length > 11 || val.length === 0){
                      border.style.border = '2px solid #FF3A44';
                      svg.style.stroke = '#ff3a44';
                      
               
                      
                   }else if(val.length === 11){
                     border.style.border = '2px solid #006A30';
                     svg.style.stroke = '#006a30';
                   
                    
                 }
      };
    
      handlePasswordChange = evt => {
        this.setState({ password: evt.target.value });
        let val2 = evt.target.value;
        let border2=document.getElementById('input2');
        let svg2=document.getElementById('path2');
       
        if(val2.length < 6 ){
            border2.style.border = '2px solid #ff3a44';
             svg2.style.stroke = '#ff3a44';
             
                      
                      
                        
             }else if(val2.length >= 6){
             border2.style.border = '2px solid #006A30';
             svg2.style.stroke = '#006a30';

                      
        
        
                };
      };

      canBeSubmitted() {
        const { phoneno, password } = this.state;
        return (
          phoneno.length === 11 &&
          password.length > 5
        );
      }
    
      handleSubmit = (evt) => {
        
        if (!this.canBeSubmitted()) {
          evt.preventDefault();
          return;
        } else {
          evt.preventDefault();
          this.props.loginState(this.state); 
        }

        
        // actual submit logic...
      };
      

    handleClick = () => {
        let x = document.getElementById("input2");
        if (x.type === "password") {
          x.type = "text";
         } else {
           x.type = "password";
         }
      };

    render (){
        const isEnabled = this.canBeSubmitted();

        return(
            <div className="login-form">
    
    <form className="text-center border border-light p-5" onSubmit={this.handleSubmit}>
        <div className="form-group">
        <p className="h4 mb-4 form-header">Welcome back</p>
        <p className="h4 mb-4 form-subheader">Request and recieve payments for transactions using kwuo</p>
        </div>

       

        
        <div className="form-row mb-4">
        <div className="col-xl-12 col-lg-12 col-md-12">
        <div className="col form-group position-relative">
        <label className="login-label">Phone number</label>
        <input className=" mb-4 input1" placeholder="Phone Number" name='phoneno' id="input1" required="required" onChange={this.handlePhoneChange} value={this.state.phoneno}/>
        <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg" id="img">
        <path fill-rule="evenodd" clip-rule="evenodd" id="path" d="M16.0428 27.2358L16.0548 27.2431C18.1906 28.6128 20.9847 28.3044 22.7748 26.5012L23.5308 25.7399C24.2335 25.0322 24.2335 23.8849 23.5308 23.177L20.3484 19.9725C19.6456 19.2649 18.5062 19.2649 17.8032 19.9725C17.4657 20.3127 17.0076 20.5038 16.53 20.5038C16.0524 20.5038 15.5944 20.3127 15.2568 19.9725L10.164 14.8468C9.46133 14.1391 9.46133 12.9918 10.164 12.2839C10.5018 11.944 10.6916 11.4828 10.6916 11.0019C10.6916 10.521 10.5018 10.0598 10.164 9.71984L6.98161 6.51655C6.27871 5.80898 5.13931 5.80898 4.43641 6.51655L3.68041 7.27659C1.88964 9.07922 1.58329 11.8927 2.94361 14.0432L2.95081 14.0553C6.43856 19.2507 10.8827 23.7248 16.0428 27.2358Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M14.6988 9.96875C17.6812 9.96875 20.0988 12.4032 20.0988 15.4063" stroke="black" id="path" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M14.6988 5.4375C17.3244 5.4375 19.8426 6.48777 21.6991 8.35728C23.5558 10.2268 24.5988 12.7624 24.5988 15.4063" id="path" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M14.6988 0.90625C22.6517 0.90625 29.0988 7.39812 29.0988 15.4063" stroke="black" stroke-width="1.5"  stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        
        </div></div>
        <div className="col-xl-12 col-lg-12 col-md-12">
        
        <div className="col form-group form-group-3 position-relative">
        <label className="login-label label1">Password</label>
        <input type="password" id="input2" className="mb-4 input1" placeholder="Password" required="required" name="pass" onChange={this.handlePasswordChange} value={this.state.password}/>
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" id="img" onClick={this.handleClick}>
        <path d="M3.47748 26.25L26.915 3.75" stroke="black" id="path2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M11.2037 23.815C12.4327 24.1962 13.7133 24.3851 15 24.375C20.125 24.46 25.3225 20.8575 28.53 17.3275C29.2432 16.5376 29.2432 15.3361 28.53 14.5462C27.3684 13.2708 26.081 12.1158 24.6875 11.0987" id="path2" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M18.0163 7.8525C17.0297 7.60839 16.0163 7.48995 15 7.5C9.96 7.4175 4.75 10.94 1.4725 14.545C0.759248 15.3349 0.759248 16.5364 1.4725 17.3262C2.46528 18.4174 3.55011 19.4211 4.715 20.3262" id="path2" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10.3112 15.9375C10.3112 14.6941 10.8053 13.5016 11.6846 12.6225C12.564 11.7434 13.7566 11.2497 15 11.25" stroke="black" stroke-width="1.5" stroke-linecap="round" id="path2" stroke-linejoin="round"/>
        <path d="M19.6863 15.9362V15.9362C19.6866 17.1795 19.193 18.3719 18.3142 19.2512C17.4354 20.1305 16.2432 20.6247 15 20.625" stroke="black" stroke-width="1.5" stroke-linecap="round" id="path2" stroke-linejoin="round"/>
        </svg>

        </div>
        </div>
    </div>

    
        <div className="d-flex">
            <div>
                <Link to="/recoverpassword" className="forgot-pass">Forgot password?</Link>
            </div>
        </div>
    <div className="d-flex justify-content-left buttons">
        <button className=" login-btn btn  btn-block my-4" type="submit" id="submit" disabled={!isEnabled} >Sign in</button><Link to="/register" className="login">Not a Merchant? Register</Link>
        </div>
    
    </form>
    
    </div>
        )
    }
};

export default LoginForm;