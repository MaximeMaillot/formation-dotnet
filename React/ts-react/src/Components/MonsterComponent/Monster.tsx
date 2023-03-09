import React, { useState } from 'react';
import MonsterInfo from '../MonsterInfoComponent/MonsterInfo';
import "./Monster.css"

interface Monster {
    id: number,
    name: string,
    maxHealth: number,
    currentHealth: number,
    src: string
}

const Monster = (props: any) => {
    const createMonster = (id: number = 1) => {
        const monster: Monster = {
            "id": 1,
            "name": "Gros PNG",
            "maxHealth": 10,
            "currentHealth": 10,
            "src": "./img/monster.png"
        }
        return monster
    }

    const [monster, setMonster] = useState(createMonster())

    const handleClick = () => {
        const updateMonster = Object.assign({}, monster);
        updateMonster.currentHealth = monster.currentHealth - props.player.attack
        if (updateMonster.currentHealth <= 0) {
            props.setGold(props.gold + 1)
            updateMonster.currentHealth = monster.maxHealth
        }
        setMonster(updateMonster)
    }

    return (
        <div className='Monster'>
            <div><img onClick={handleClick} src="./img/monster.png" alt="agrougrou" /></div>
            <MonsterInfo monster={monster} setMonster={setMonster} key={monster.currentHealth} />
        </div>
    );
};

export default Monster;