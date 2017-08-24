/**
 * Created by user on 16/08/2017.
 */
import React from 'react';

export default class Signin extends React.Component{
    render(){
        return(
            <div>

            <div>Userid   <input type="text" id="Id"/></div>
                <div>Password   <input type="password" id="pwd"/></div>
                <div><button type="button" class="btn btn-info"><input type="button" value="submit"/></button></div>
            </div>);


    }


}