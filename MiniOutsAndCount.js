import React from 'react';
import MiniOuts from './MiniOuts';
import MiniCount from './MiniCount';

function MiniOutsAndCount(props) {

    var outsStyle = {
        gridColumn: "2/6",
        gridRow: 4,
        border: "1px solid #000",
        display: "flex",
        justifyContent: "space-around"
    };

    return (
        <div style={outsStyle}>
            <MiniOuts outs={props.outs}/>
            <MiniCount count={props.count} />
        </div>
    );
}

export default MiniOutsAndCount;