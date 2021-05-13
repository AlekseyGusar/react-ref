import React, { Component } from 'react';

import './input.css';


export default class Input extends Component{
     render(){
        return <div>
            <span className="operator-name"></span>
            <span>+38 0</span>
            <input 
                type="text" 
                className="operator-input"
                />
            <span className="check-icon"> - </span>
            <input type="text" 
                className="phone-input"
                 />
        </div>;
    }
}