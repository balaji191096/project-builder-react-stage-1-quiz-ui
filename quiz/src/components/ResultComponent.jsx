import React, { Component } from 'react';
import './Components.css';
export default class ResultComponent extends Component {
    render() {
        return (
            <div>
                <div className="resultContainer">
                <i class="far fa-check-circle"></i>
                    <p>Result</p>
                    <br />
                
                    <div className="innerbox">
                        <span className="comment">You need more practice!</span><br />
                        <span className="score">Your Score: 20%</span><br /><br /><br />

                        <div className="details">
                            <div>
                                <span className="description">Total number of questions:</span>
                                <span className= 'points'>15</span>
                            </div>

                            <div>
                                <span className="description">Number of attempted questions:</span>
                                <span className= 'points'>9</span>
                            </div>
                            
                            <div>
                                <span className="description">Number of Correct Answers:</span>
                                <span className= 'points'>3</span>
                            </div>

                            <div>
                                <span className="description">Number of Wrong Answers:</span>
                                <span className= 'points'>6</span>
                            </div>

                        </div>

                    </div>
                    <br /><br />
                    <button className="playAgain">Play Again</button>
                    <button className="backToHome">Back to Home</button>
                </div>
            </div>
        )
    }
}
