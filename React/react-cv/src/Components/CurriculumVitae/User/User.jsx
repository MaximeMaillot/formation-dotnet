import React from 'react';
import "./User.scss"

const User = () => {
    return (
        <div className='User'>
            <img className='User-img' src="./img/pfp.png" alt="profile" />
            <div className='User-name'>Maxime Maillot</div>
            <div className='User-title'>Développeur FullStack</div>
        </div>
    );
};

export default User;