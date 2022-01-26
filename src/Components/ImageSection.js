import React from 'react';
import about from '../img/dev.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';
import { faPencilRuler } from '@fortawesome/free-solid-svg-icons';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { faFileContract } from '@fortawesome/free-solid-svg-icons';
import { faSuitcaseRolling } from '@fortawesome/free-solid-svg-icons';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { faSmileWink } from '@fortawesome/free-regular-svg-icons';


function ImageSection() {
    return (
        <div className="ImageSection">
            {/* <div className="img">
                <img src={about} alt=""/>
            </div> */}
            <div className="about-info">
                <h5>
                    Hi there, nice to meet you!
                </h5>
                <p className="about-text">
                    My name's Yuna and I'm a second year computer science student at University of Waterloo.
                </p>
                <div className="about-details">
                        <div className={"left-item"}><FontAwesomeIcon icon={faHandHoldingHeart} className={"abt-icon"}/></div>
                        <div className={"right-item"}><p>My latest project is recipro, a mobile app that connects neighbours to provide & reciprocate help. </p></div>
                        <div className={"left-item"}><FontAwesomeIcon icon={faLaptopCode} className={"abt-icon"}/></div>
                        <div className={"right-item"}><p>Some of my favourite tools are Python, C++, and React Native.</p></div>
                        <div className={"left-item"}><FontAwesomeIcon icon={faFileContract} className={"abt-icon"}/></div>
                        <div className={"right-item"}><p>I'm currently learning: Django, Jupyter Notebook</p></div>
                        {/* <div className={"left-item"}><FontAwesomeIcon icon={faPencilRuler} className={"abt-icon"}/></div>
                        <div className={"right-item"}><p>Fun fact: I have designed and created sweaters by crocheting!</p></div> */}
                </div>
                <div className="btn">
                    <a href="https://drive.google.com/file/d/1UeP4h7aHOz7l6wI7ltMp6iXC8X_zcBQX/view" target="blank">
                        Download resume
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ImageSection;
