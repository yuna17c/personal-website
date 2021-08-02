import React from 'react';
import '../styles/nom.css';

function Nom() {
    return (
       <div className="nom">
           <div className="r-container">
               <h4>Manage your Fridge</h4>
               <p></p>
           </div>
           <div className="r-container">
               <h5>Inspiration</h5>
               <p>Food waste is one of the biggest challenges we face in the modern world. According to National Zero Waste Council's research, </p>
               <ul className="inspiration-list">
                   <li><p><span>One-third</span> of all food produced is wasted</p></li>
                    <li><p>Almost <span>2.2 million tonnes</span> of edible food is wasted each year in Canada, costing over <span>$17 billion</span></p></li>
                    <li><p>Roughly <span>one quarter</span> of man-made greenhouse gas emissions are created by food waste</p></li>
                </ul>
                <p>Our team has witnessed the magnitude of the food waste dilemma first-hand, and so we came together to come up with a solution.
                    As university students ourselves, we don't always have time to cook and we often forget what food we buy. 
                    We have phones that remind us of anything, so why not remind us about the food?</p>
           </div>
           <div className="r-container">
               <h5>What it does</h5>
               <p>features</p>
           </div>
           <div className="r-container">
               <h5>How we built it</h5>
               <p>Using React Native</p>
           </div>
       </div>
    )
}

export default Nom;
