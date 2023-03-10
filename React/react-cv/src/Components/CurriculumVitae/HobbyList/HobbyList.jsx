import React from 'react';
import "./HobbyList.css"
import Hobby from "./../Hobby/Hobby"
import { faBookOpen, faGamepad, faChessKing } from '@fortawesome/free-solid-svg-icons';

const HobbyList = () => {
    return (
        <div className='HobbyList'>
            <Hobby icon={faBookOpen} text="Lecture" />
            <Hobby icon={faGamepad} text="Gaming" />
            <Hobby icon={faChessKing} text="Chess" />
        </div>
    );
};

export default HobbyList;