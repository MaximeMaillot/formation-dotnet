import React from 'react';
import PersonalInfo from '../../Components/PersonalInfoComponent/PersonalInfo';
import ProfessionalInfo from '../../Components/ProfessionalInfoComponent/ProfessionalInfo';
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