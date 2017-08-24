import React from 'react';
import Header from './Header.js';
import Desc from './Desc.js';
import Signin from './Signin.js';
import Signup from './Signup.js';


export default class All extends React.Component{
    render() {
        return(
            <div class="container">
            <div className="jumbotron text-center">
                <Header title="Dr. Subash Eye Clinic" />
            </div>
                <Desc />
                <h2>Patient Signin:</h2>
                <Signin />
                <h2>Administration Signin</h2>
                <Signin />
                <Signup />
            </div>
        );
    }

}