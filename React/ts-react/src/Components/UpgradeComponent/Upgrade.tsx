import React, { useState } from 'react';
import "./Upgrade.css"

const Upgrade = (props: any) => {
    const [price, setPrice] = useState(1)

    const handleClick = () => {
        if (props.gold >= price) {
            const updatePlayer = Object.assign({}, props.player)
            updatePlayer.attack += 1
            props.setPlayer(updatePlayer)
            setPrice(price * 2)
            props.setGold(props.gold - price)
        }
    }

    return (
        <div className='Upgrade' onClick={handleClick}>
            Attack + 1 | Price : {price}
        </div>
    );
};

export default Upgrade;