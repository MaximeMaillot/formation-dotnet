import React from 'react';
import "./ExperienceList.css"
import Experience from "../ExperienceComponent/Experience"
import Title from '../TitleComponent/Title';

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