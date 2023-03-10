import React from 'react';
import "./Hobby.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Hobby = ({ icon, text }) => {
    return (
        <div className='Hobby'>
            <FontAwesomeIcon icon={icon} className="Hobby-icon"></FontAwesomeIcon>
            <span className='Hobby-text'>{text}</span>
        </div>
    );
};

export default Hobby;