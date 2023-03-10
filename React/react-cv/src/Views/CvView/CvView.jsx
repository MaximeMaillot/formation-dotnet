import React from 'react';
import PersonalInfo from '../../Components/CurriculumVitae/PersonalInfo/PersonalInfo';
import ProfessionalInfo from '../../Components/CurriculumVitae/ProfessionalInfo/ProfessionalInfo';
import "./CvView.css"

const CvView = () => {
    return (
        <div className='CvView'>
            <PersonalInfo />
            <ProfessionalInfo />
        </div>
    );
};

export default CvView;