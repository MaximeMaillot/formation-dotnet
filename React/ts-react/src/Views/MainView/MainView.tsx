import React from 'react';
import Main from '../../Components/MainComponent/Main';
import Ressource from '../../Components/RessourceComponent/Ressource';
import "./MainView.css"

const MainView = () => {
    return (
        <div className='MainView'>
            <Ressource />
            <Main />
        </div>
    );
};

export default MainView;