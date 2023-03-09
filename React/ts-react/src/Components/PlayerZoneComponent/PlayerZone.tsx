import React from 'react';
import Menu from '../MenuComponent/Menu';
import UpgradeList from '../UpgradeListComponent/UpgradeList';
import "./PlayerZone.css"

const PlayerZone = () => {
    return (
        <div className='PlayerZone'>
            <Menu />
            <UpgradeList />
        </div>
    );
};

export default PlayerZone;