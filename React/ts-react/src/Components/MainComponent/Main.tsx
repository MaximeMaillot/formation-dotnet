import React, { useState } from 'react';
import MonsterZone from '../MonsterZoneComponent/MonsterZone';
import PlayerZone from '../PlayerZoneComponent/PlayerZone';
import "./Main.css"

const Main = (props: any) => {
    const [player, setPlayer] = useState({ attack: 1 })

    return (
        <div className='Main'>
            <MonsterZone gold={props.gold} setGold={props.setGold} player={player} setPlayer={setPlayer} />
            <PlayerZone gold={props.gold} setGold={props.setGold} player={player} setPlayer={setPlayer} />
        </div>
    );
};

export default Main;