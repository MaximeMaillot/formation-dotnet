import React from 'react';
import "./Separator.css"

const Separator = ({ color = "black", width = "75%", margin = "0 auto" }) => {
    return (
        <hr style={{ color: color, backgroundColor: color, borderColor: color, width: width, margin: margin }} />
    );
};

export default Separator;