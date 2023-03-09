import React from 'react';
import "./MonsterInfo.css"

const MonsterInfo = (props: any) => {
    return (
        <div className='MonsterInfo' onClick={(e) => { console.log(props.monster) }}>
            {props.monster.currentHealth} / {props.monster.maxHealth}
        </div>
    );
};

export default MonsterInfo;