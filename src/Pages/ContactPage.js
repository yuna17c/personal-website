import React from 'react'
import ContactItem from '../Components/ContactItem';
import linkedin from '../img/linkedin.png';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
import Tittle from '../Components/Tittle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import {faGithubAlt} from '@fortawesome/free-brands-svg-icons';

function ContactPage() {
    return (
        <div>
            <div className="title">
                <Tittle title={'Contact Me'} span={'Contact Me'} />
            </div>
            <div className="ContactPage">
                {/* <div className="map-sect">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.700327595181!2d-0.13858868403737226!3d50.836714467337785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487585104ec1fe1b%3A0x28b5349b15ce0c4d!2sLondon%20Road%20(Brighton)%20Train%20Station%20-%20Southern%20Railway!5e0!3m2!1sen!2suk!4v1611468671158!5m2!1sen!2suk" width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                </div> */}
                <div className="contact-sect">
                    <ContactItem icon={faEnvelope} text1={'yuna0617c@gmail.com'} text2="mailto:yuna0617c@gmail.com" title={'Email'}/>
                    <ContactItem icon={faLinkedinIn} text1={'Connect with me!'} text2="https://www.linkedin.com/in/yuna-choi17/" title={'LinkedIn'}/>
                    <ContactItem icon={faGithubAlt} text1={'Check out my projects.'}text2="https://github.com/yuna17c" title={'Follow my Github'}/>
                </div>
                <div className="description">
                    <h5>Looking for winter 2021/2022 opportunities</h5>
                    <p>Currently looking for full stack/app development opportunities for the winter of 2021/2022. Available remotely and in-person in the GTA area.</p>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;
