import React from 'react';
import "./Title.css"

const Title = ({ text = "Template title" }) => {
    return (
        <h2 className='Title'>
            {text}
        </h2>
    );
};


export default Title;