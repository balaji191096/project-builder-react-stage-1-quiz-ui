import React, { Component } from 'react';
import './Components.css';


export default class QuizComponent extends Component {
    render() {
        return (
            <div>
                <div className = "quizContainer">
                 <p className="heading">Question</p>
                <br />
                <p className = " question_No"> 4 of 15</p>
                <p className = "question">Which is the only mammal that can't jump?</p>
                <br />
                <div className = "options">
                    <button className="opt">Dog</button>
                    <button className="opt">Goat</button>
                    <button className="opt">Elephant</button>
                    <button className="opt">Lion</button>
                </div>
                <br />
                <div className="keys">
                    <button className="prev">Previous</button>
                    <button className="next">Next</button>
                    <button className="quit">Quit</button>
                </div>
                </div>
                
            </div>
        )
    }
}
