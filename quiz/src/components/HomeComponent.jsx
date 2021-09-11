import React, { Component } from 'react';
import './Components.css';

export default class HomeComponent extends Component {
    render() {
        return (
            <div className="homeContainer">
                <span>Quiz App</span>
                
                <br />
                <button className="play">Play</button>
            </div>
        )
    }
}
