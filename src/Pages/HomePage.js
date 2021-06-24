import React from 'react';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am 
                    <div className="rotation">
                        <span> Yuna Choi.</span>
                        <span> a developer.</span>
                        <span> an athlete.</span>
                        <span> a student.</span>
                        <span> a tester.</span>
                    </div>
                </h1>
                <p className="h-sub-text">
                    I'm a computer science student at University of Waterloo. 
                    I love creating apps and softwares and some of the areas of my interests include: fintech, machine learning, software development, data science and game development.
                    In my free time, you'll find me playing sports (probably tennis and ping pong), watching movies and crocheting. 
                    Learn more about <Link to="about" className="links">me</Link>, <Link to="portfolios" className="links">my projects</Link> and <Link to="blogs" className="links">my interests.</Link>
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
            </header>
        </div> 
    )
}

export default HomePage;
