import React from 'react';
import "./Profile.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Profile = ({ icon, text }) => {
    return (
        <div className='Profile'>
            <FontAwesomeIcon icon={icon} className="Profile-icon" />
            <span className="Profile-text">{text}</span>
        </div>
    );
};

export default Profile;