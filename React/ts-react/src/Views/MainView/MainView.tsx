import React, { useState } from 'react';
import Main from '../../Components/MainComponent/Main';
import Ressource from '../../Components/RessourceComponent/Ressource';
import "./MainView.css"

const MainView = () => {
    const [gold, setGold] = useState(0)

    return (
        <div className='MainView'>
            <Ressource gold={gold} />
            <Main gold={gold} setGold={setGold} />
        </div>
    );
};

export default MainView;