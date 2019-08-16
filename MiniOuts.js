import React from 'react';

function MiniOuts(props) {
    var minioutsStyle = {
        fontSize: "14px",
        paddingLeft: "5px"
    };

    return (
        <div style={minioutsStyle}>
            {props.outs} Outs
        </div>
    );
}

export default MiniOuts;