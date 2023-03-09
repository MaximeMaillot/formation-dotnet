import React from 'react';
import "./Stage.css"

const Stage = (props: any) => {
    return (
        <div className='Stage'>
            Stage {props.player.stage}
        </div>
    );
};

export default Stage;