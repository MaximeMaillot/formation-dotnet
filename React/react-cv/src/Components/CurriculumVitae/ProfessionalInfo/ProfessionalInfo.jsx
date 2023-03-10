import React from 'react';
import ExperienceList from '../ExperiencesList/ExperienceList';
import FormationList from '../FormationList/FormationList';
import "./ProfessionalInfo.scss"
import data from "./../../../data/cv.json"
import Separator from '../../Separator/Separator';

const ProfessionalInfo = () => {
    return (
        <div className='ProfessionalInfo'>
            <ExperienceList experiences={data.experiences} />
            <Separator />
            <FormationList formations={data.formations} />
        </div>
    );
};

export default ProfessionalInfo;