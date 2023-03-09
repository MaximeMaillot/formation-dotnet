import React from 'react';
import Upgrade from '../UpgradeComponent/Upgrade';
import "./UpgradeList.css"

const UpgradeList = () => {
    return (
        <div className='UpgradeList'>
            <Upgrade />
            <Upgrade />
            <Upgrade />
            <Upgrade />
        </div>
    );
};

export default UpgradeList;