import React from 'react';
import r1 from '../img/racko1.PNG';
import r2 from '../img/racko2.PNG';
import r3 from '../img/racko3.PNG';
import r4 from '../img/racko4.PNG';

function Racko() {
    return (
        <div className="racko">
            <div className="r-container">
                <h4>Rack 'em, Stack 'em & Score</h4>
                <p>Web version of card game Rack-O</p>
            </div>
            <div className="r-container">
                <h5>Register your account to keep track of your scores</h5>
                <img src={r4}/>
                <h5>Register your account to keep track of your scores</h5>
                <img src={r4}/>
                <h5>Play with your friends</h5>
                <img src={r2}/>
                <h5>Customize your games</h5>
                <img src={r3}/>
            </div>
            <div className="r-container">
                <h5>Built with</h5>
                <ul className="inspiration-list">
                    <li><p>Python Pygame</p></li>
                    </ul>
            </div>
        </div>
    )
}

export default Racko;
