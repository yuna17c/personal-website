import React from 'react';
import r1 from '../img/track1.png';
import r2 from '../img/track2.png';
import r3 from '../img/track3.PNG';


function ExpenseTracker() {
    return (
        <div className="racko">
            <div className="r-container">
                <h4>Track your expense online</h4>
            </div>
            <div className="r-container">
               <h5>Inspiration</h5>
               <p>As the pandemic persists, online purchases have been a very common practice. From online shopping to paying your bill, it is harder to keep track of expenses you spend online. 
                   With the expense tracker chrome extension, it is much easier to track your expenses as it occurs!
               </p>
           </div>
           <div className="r-container">
                <img src={r2}/>
                <h5>Add your expenses as you spend</h5>
                <img src={r1}/>
                <h5>Set your own budget</h5>
                <img src={r3}/>
            </div>
            <div className="r-container">
                <h5>Built with</h5>
                <ul className="inspiration-list">
                    <li><p>JavaScript</p></li>
                    </ul>
            </div>
        </div>
    )
}
export default ExpenseTracker;
