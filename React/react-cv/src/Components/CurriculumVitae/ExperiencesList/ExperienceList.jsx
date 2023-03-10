import React from 'react';
import "./ExperienceList.scss"
import Experience from "../Experience/Experience"
import Title from '../Title/Title';

const ExperienceList = ({ experiences }) => {
    return (
        <>
            <Title text='Expériences Professionnelles' />
            <div className='ExperienceList'>
                {experiences.map((experience) => {
                    return experience.active ? <Experience experience={experience} key={experience.id} /> : undefined
                })}
            </div>
        </>
    );
};

export default ExperienceList;