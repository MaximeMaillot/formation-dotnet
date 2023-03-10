import React from 'react';
import "./ProfileList.css"
import Profile from "../ProfileComponent/Profile"
import { faCar, faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const ProfileList = () => {
    return (
        <div className='ProfileList'>
            <Profile icon={faPhone} text="06 37 29 70 27" />
            <Profile icon={faEnvelope} text="maillot.maxime62@gmail.com" />
            <Profile icon={faLocationDot} text="Hellemes 59260" />
            <Profile icon={faCar} text="Permis B avec Véhicule" />
            <Profile icon={faGithub} text="MaximeMaillot" />
        </div>
    );
};


export default ProfileList;