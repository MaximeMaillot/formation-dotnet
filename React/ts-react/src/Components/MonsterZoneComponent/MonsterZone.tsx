import React from 'react';
import Monster from '../MonsterComponent/Monster';
import Stage from '../StageComponent/Stage';
import "./MonsterZone.css"

const MonsterZone = (props: any) => {
    return (
        <div className='MonsterZone'>
            <Stage />
            <Monster gold={props.gold} setGold={props.setGold} player={props.player} setPlayer={props.setPlayer} />
        </div>
    );
};

export default MonsterZone;