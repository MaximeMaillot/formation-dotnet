import React from 'react';
import Description from '../../CurriculumVitae/Description/Description';
import HobbyList from '../../CurriculumVitae/HobbyList/HobbyList';
import ProfileList from '../../CurriculumVitae/ProfileList/ProfileList';
import Separator from '../../Separator/Separator';
import User from '../../CurriculumVitae/User/User';
import "./PersonalInfo.css"

const PersonalInfo = () => {
    return (
        <div className='PersonalInfo'>
            <User />
            <Separator />
            <Description />
            <Separator />
            <ProfileList />
            <Separator />
            <HobbyList />
        </div>
    );
};

export default PersonalInfo;