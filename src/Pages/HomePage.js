import React from 'react';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

function HomePage() {
    return (
        <div className="HomePage">
            <div className="hero">
                <h1 className="hero-text">
                    Hi, I am 
                    <div className="rotation">
                        <span> Yuna Choi.</span>
                        <span> a data scientist.</span>
                        <span> a music lover ♪♫</span>
                        <span> a student.</span>
                    </div>
                </h1>
                <p className="h-sub-text">
                    Learn more about <Link to="about" className="links">me</Link>, <Link to="portfolios" className="links">my projects</Link> and <Link to="experience" className="links">my experience.</Link>
                </p>
                <div className="icons">
                    <a href="https://www.facebook.com/profile.php?id=100009746978762" className="icon-holder" target="blank">
                        <FontAwesomeIcon icon={faFacebook} className="icon fb" />
                    </a>
                    <a href="https://github.com/yuna17c" className="icon-holder" target="blank">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </a>
                    <a href="https://www.linkedin.com/in/yuna-choi17/" className="icon-holder" target="blank">
                        <FontAwesomeIcon icon={faLinkedin} className="icon yt"/>
                    </a>
                </div>
            </div>
        </div> 
    )
}

export default HomePage;
