import React from 'react';
import Formation from '../Formation/Formation';
import Title from '../Title/Title';
import "./FormationList.css"

const FormationList = ({ formations }) => {
    return (
        <>
            <Title text='Formations' />
            <div className='FormationList'>
                {formations.map((formation) => {
                    return formation.active ? <Formation key={formation.id} formation={formation} /> : undefined
                })}
            </div>
        </>
    );
};

export default FormationList;