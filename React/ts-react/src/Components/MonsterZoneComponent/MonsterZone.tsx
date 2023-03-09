import React from 'react';
import Monster from '../MonsterComponent/Monster';
import Stage from '../StageComponent/Stage';
import "./MonsterZone.css"

const MonsterZone = () => {
    return (
        <div className='MonsterZone'>
            <Stage />
            <Monster />
        </div>
    );
};

export default MonsterZone;