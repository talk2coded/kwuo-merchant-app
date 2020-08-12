import React from 'react';
import './home-page.css';
import HomeComponent from '../../components/home-component/home.component';

class HomePage extends React.Component{
   render(){
       return(
        <div>
            <HomeComponent/>
        </div>
       )
   }

};

export default HomePage;