import React from 'react';
import r1 from '../img/cyber1.PNG';
import r2 from '../img/cyber2.PNG';
import r3 from '../img/cyber3.PNG';
import r4 from '../img/cyber4.PNG';

function FinancialAnalysis() {
    return (
        <div className="racko">
            <div className="r-container">
                <h4>2D Wave-Clear Adventure Game</h4>
            </div>
            <div className="r-container">
                <img src={r1}/>
                <h5>Clear the waves of viruses!</h5>
                <img src={r4}/>
                <h5>Buy items</h5>
                <img src={r2}/>
                <h5>Check your own inventory</h5>
                <img src={r3}/>                
            </div>
            <div className="r-container">
                <h5>Built with</h5>
                <ul className="inspiration-list">
                    <li><p>Python</p></li>
                    <li><p>Python Tkinter</p></li>
                    <li><p>SQL</p></li>
                </ul>
            </div>
        </div>
    )
}
export default FinancialAnalysis;
