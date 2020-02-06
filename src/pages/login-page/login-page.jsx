import React from 'react';
import FormImage from '../../components/form-image/form-image.component';
import LoginForm from '../../components/login-form/login-form.component';
import LoadingState from '../../components/loading-form/loading-state';
import './login-page.css';
import {withRouter} from 'react-router-dom';

class LoginPage extends React.Component{ 

    constructor(props){
        super(props)

        this.state = {
            phoneno: "",
            password: "",
            loader: false
        }
    }

    state (you, two) {

    }


    updateState = (stateUpdate) => {
        
        this.setState( () => (stateUpdate), () => 
        
            fetch("https://api.example.com/items")
            .then(res => res.json)
            .then(
                (result) => {

                },
                (error) => {
                    console.log('error occured');
                    this.props.history.push('/register')
                }
            )
        );
    }

render() {
    
    return(
   <div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-xl-6 col-lg-6">
                    <FormImage/>
                </div>
                <div className="col-xl-6 col-lg-6">
                { (!this.state.loader) ? 
                    <LoginForm loginState={this.updateState}/> :
                    <LoadingState/>}
                </div>
            </div>
        </div>
   </div>
   );
}
}

export default LoginPage;