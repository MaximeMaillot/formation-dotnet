import React from 'react';
import MonsterInfo from '../MonsterInfoComponent/MonsterInfo';
import "./Monster.css"

const Monster = () => {
    return (
        <div className='Monster'>
            <div style={{ marginBottom: "2vh", backgroundColor: "black", color: "white" }}>Agrougrou</div>
            <MonsterInfo />
        </div>
    );
};

export default Monster;