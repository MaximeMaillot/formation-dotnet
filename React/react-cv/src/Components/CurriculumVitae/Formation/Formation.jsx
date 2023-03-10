import React from 'react';
import "./Formation.scss"

const Formation = ({ formation }) => {
    return (
        <div className='Formation'>
            <span><b>{formation.title}</b> - {formation.formateur} - {formation.city}</span><span><b>{formation.date}</b></span>
        </div>
    );
};

export default Formation;