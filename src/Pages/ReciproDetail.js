import React from 'react';
import r1 from '../img/r1.png';
import r2 from '../img/r2.png';
import r3 from '../img/r3.png';
import r4 from '../img/r4.png';

function Recipro() {
    return (
       <div>
           <div className="r-container">
               <h4>Increase your social capital</h4>
               <p>Reciprocate acts of kindness</p>
           </div>
           <div className="r-container">
               <h5>Problem</h5>
               <p>In an increasingly digital world, loneliness and isolation are becoming a big problem. 
                   Digital interactions have gradually eroded one’s sense of community, belonging, and social capital.
                    This issue has been further exacerbated by COVID-19 restrictions.
                    Studies show that the majority of people in urban areas report that they know a “few” neighbours, while 8% report knowing none of their neighbours. 
                    This is important because whether one knows their neighbour is strongly linked with social trust, a strong indicator of happiness. The problem exacerbates in suburban areas as not knowing one’s neighbour is most likely among those that live in detached houses.
                    Recipro aims to solve the lack of social capital in modern world. 
                </p>
           </div>
           <div className="r-container">
               <h5>Market Research</h5>
               <p>We conducted a survey to over 100 people in the Oakville area. Our target audience includes but not limited to families in urban/suburban areas. Our study identified the low social capital of community members, with 56.7% of survey respondents stating they don’t know their neighbours. 
                   One key issue shared by parents was the lack of accessible opportunities, which prevented them from forming connections with their community. Despite this, there was still a desire of 73% to engage with their neighbours.</p>
           </div>
           <div className="r-container">
               <h5>Reciprocity?</h5>
               <p>Recipro is based on the idea of reciprocity. We aim to create a healthy, sustainable community where acts of kindness circulate. 
                   Recipro introduces a point-based system that incentivize reciprocity and community participation.

               </p>
           </div>
           <div className="r-container">
               <h5>What it does</h5>
               <p>features</p>
               <div className="r-table">
                    <img src={r1}/>
                    <img src={r2}/>
                    <img src={r3}/>
                    <img src={r4}/>
               </div>
           </div>
           <div className="r-container">
               <h5>Built with</h5>
               <ul className="inspiration-list">
                   <li><p>React Native</p></li>
                    <li><p>Firestore Firebase</p></li>
                    </ul>
           </div>
       </div>
    )
}

export default Recipro;
