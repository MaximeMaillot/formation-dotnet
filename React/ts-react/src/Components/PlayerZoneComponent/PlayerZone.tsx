import React from 'react';
import Menu from '../MenuComponent/Menu';
import UpgradeList from '../UpgradeListComponent/UpgradeList';
import "./PlayerZone.css"

const PlayerZone = (props: any) => {
    return (
        <div className='PlayerZone'>
            <Menu />
            <UpgradeList gold={props.gold} setGold={props.setGold} player={props.player} setPlayer={props.setPlayer} />
        </div>
    );
};

export default PlayerZone;