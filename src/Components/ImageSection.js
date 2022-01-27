import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCode, faHandHoldingHeart, faHeadphonesAlt, faHeart, faLaughBeam, faSeedling } from '@fortawesome/free-solid-svg-icons';
import pfp from '../img/profile_pic.jpg';


function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="about-info">
                <img src={pfp} alt="" id="pfp"/>
                <table>
                <div className="about-details">
                    <tr>
                        <td class="left"><FontAwesomeIcon icon={faLaughBeam} className={"abt-icon"}/></td>
                        <td><p>Hi, I'm Yuna 👋. </p></td>
                    </tr>
                    <tr>   
                        <td class="left"><FontAwesomeIcon icon={faHeart} className={"abt-icon"}/></td>
                        <td><p>I'm interested in data science, machine learning, and developing apps! Some of my favourite tools are Python, C++, and React.</p></td>
                    </tr>
                    <tr>
                        <td class="left"><FontAwesomeIcon icon={faSeedling} className={"abt-icon"}/></td>
                        <td><p>I'm currently learning: Django, Jupyter Notebook </p></td>
                    </tr>
                    <tr>
                        <td class="left"><FontAwesomeIcon icon={faFileCode} className={"abt-icon"}/></td>
                        <td><p>My latest project is reci.py, a web app that helps find recipes and manage your fridge. </p></td>
                    </tr>
                    <tr>
                        <td class="left"><FontAwesomeIcon icon={faHeadphonesAlt} className={"abt-icon"}/></td>
                        <td><p>I love music, crocheting, playing tennis, and skiing!</p></td>
                    </tr>
                    {/* <div className={"left-item"}><FontAwesomeIcon icon={faPencilRuler} className={"abt-icon"}/></div>
                    <div className={"right-item"}><p>Fun fact: I have designed and created sweaters by crocheting!</p></div> */}
                </div>
                </table>
                <a href="https://drive.google.com/file/d/1UeP4h7aHOz7l6wI7ltMp6iXC8X_zcBQX/view" target="blank"
                    className="download-btn">
                        Download resume
                </a>
                
            </div>
        </div>
    )
}
//  I'm looking to collaborate on..

export default ImageSection;
