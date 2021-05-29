import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ContactItem({icon, text1, text2,title}) {
    return (
        <div className="ContactItem">
            <div className="contact">
                <div>
                    <a href={text2} target="blank"><FontAwesomeIcon icon={icon} className={"contact-icon"}/></a>
                </div>
                <div className="right-items">
                    <h6>{title}</h6>
                    <p>{text1}</p>
                </div>
            </div>
        </div>
    )
}

export default ContactItem;
