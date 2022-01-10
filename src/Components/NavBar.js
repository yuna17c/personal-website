import React from 'react'
import avatar from '../img/vector.png';
import picture_1 from  '../img/vector.png';
import {NavLink} from 'react-router-dom';

function Navbar() {
    return (
        <div className="NavBar">
            <nav className="nav">
                <div className="profile">
                    <img src={picture_1} alt=""/>
                 </div>

                <ul className="nav-items">
                    <li className="nav-item">
                        <NavLink to="/" exact activeClassName="active">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" exact activeClassName="active">
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/portfolios" exact activeClassName="active">
                            Projects
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/blogs" exact activeClassName="active">
                            More
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" exact activeClassName="active">
                            Contact
                        </NavLink>
                    </li>
                </ul>

                <footer className="footer">
                    <p>
                        @ 2022 Made By Yuna Choi
                    </p>
            </footer>
            </nav>
            
        </div>
    )
}

export default Navbar;
