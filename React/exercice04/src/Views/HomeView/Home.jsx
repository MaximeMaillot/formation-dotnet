import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
    faHome,
    faAddressCard,
    faBatteryEmpty,
    faBatteryQuarter,
    faBatteryHalf,
    faBatteryThreeQuarters,
    faBatteryFull,
    faHouse
} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faHouse)


const Home = () => {
    return (
<<<<<<< HEAD
        <div>
            <h1>TpAnnuaire - Bootstrap - FontAwesome</h1>
            <img src=".//logo192.png" alt="Logo-react" />

            <div>
                <div>
                    <FontAwesomeIcon icon={faBatteryEmpty} style={{ padding: '10px', color: 'red', fontSize: '45px' }} />
                    <FontAwesomeIcon icon={faBatteryQuarter} style={{ padding: '10px', color: 'rgb(40, 44, 52)', fontSize: '45px' }} />
                    <FontAwesomeIcon icon={faBatteryHalf} style={{ padding: '10px', color: 'rgb(40, 44, 52)', fontSize: '45px' }} />
                    <FontAwesomeIcon icon={faBatteryThreeQuarters} style={{ padding: '10px', color: 'rgb(40, 44, 52)', fontSize: '45px' }} />
                    <FontAwesomeIcon icon={faBatteryFull} style={{ padding: '10px', color: 'green', fontSize: '45px' }} />
                </div>
                <div>
                    <FontAwesomeIcon icon={faAddressCard} style={{ padding: '10px' }} />
                    <FontAwesomeIcon icon={faEnvelope} style={{ padding: '10px' }} />
                </div>
                <div>
                    <FontAwesomeIcon icon={faHome} style={{ padding: '10px' }} />
                    <FontAwesomeIcon icon={faHome} transform="down-4 grow-2.5" style={{ padding: '10px' }} />
                    <FontAwesomeIcon icon={faHome} style={{ padding: '10px', color: 'red', fontSize: '25px' }} />
                </div>
                <div>
                    <FontAwesomeIcon icon="fa-house" style={{ padding: '10px', color: 'red', fontSize: '25px' }} />
                </div>
            </div>

=======
        <div className='text-center'>
            <h1>
                Coucou la maison
            </h1>
>>>>>>> f54eaee3cf11d60e00822ef4acb6a898ca718842
        </div>
    );
};

export default Home;