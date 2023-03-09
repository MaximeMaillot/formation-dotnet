import React from 'react';
import MonsterZone from '../MonsterZoneComponent/MonsterZone';
import PlayerZone from '../PlayerZoneComponent/PlayerZone';
import "./Main.css"

const Main = () => {
    return (
        <div className='Main'>
            <MonsterZone />
            <PlayerZone />
        </div>
    );
};

export default Main;