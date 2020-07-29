import React from 'react';
import './home-page.css';
import DashboardNav from '../../components/dashboard-header/dashboard-header';
import HomeComponent from '../../components/home-component/home.component';

class HomePage extends React.Component{
   render(){
       return(
        <div>
            <DashboardNav/>
            <HomeComponent/>
        </div>
       )
   }

};

export default HomePage;