import React from 'react';
import Description from '../DescriptionComponent/Description';
import HobbyList from '../HobbyListComponent/HobbyList';
import ProfileList from '../ProfileListComponent/ProfileList';
import Separator from '../SeparatorComponent/Separator';
import User from '../UserComponent/User';
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