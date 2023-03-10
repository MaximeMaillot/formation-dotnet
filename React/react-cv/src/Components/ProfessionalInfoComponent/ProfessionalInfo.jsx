import React from 'react';
import ExperienceList from '../ExperiencesListComponent/ExperienceList';
import FormationList from '../FormationListComponent/FormationList';
import "./ProfessionalInfo.css"
import data from "./../../datas/cv.json"

const ProfessionalInfo = () => {
    return (
        <div className='ProfessionalInfo'>
            <ExperienceList experiences={data.experiences} />
            <FormationList formations={data.formations} />
        </div>
    );
};

export default ProfessionalInfo;