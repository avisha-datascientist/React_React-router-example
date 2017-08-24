import React from 'react';
import {Link} from 'react-router-dom';
import Info from './Info.js';
import Routes from './Routes.js';


export default class Signup extends React.Component{
    render(){
        return(

            <div>
           <h1>Info</h1>
            {Routes}
            <Link to="/Info">Info</Link>
            {this.props.children}
            </div>


        );


    }


}