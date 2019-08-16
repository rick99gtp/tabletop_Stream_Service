import React from 'react';

function MiniPitcherName(props) {
    
    var nameStyle = {
        fontSize: "14px",
        paddingLeft: "2px"
    };

    return (
        <div style={nameStyle}>
            {props.name}
        </div>
    );
}

export default MiniPitcherName;