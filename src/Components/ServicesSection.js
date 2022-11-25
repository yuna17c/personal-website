import React from 'react';

function ServicesSection({image, title, text, where, date, link, list1, list2, list3, list4, link2}) {
    return (
        <div className="ServicesSection">
            <img src={image}></img>
            <h5 className="job-title">{title}</h5>
            <p>@ {where}</p>
            <p>{date}</p>
        </div>
    )
}

export default ServicesSection;
