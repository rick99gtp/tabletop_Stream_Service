import React from 'react';

function HMiniTeamName(props) {

    var teamnameStyle = {
        gridColumn: "2/5",
        gridRow: 3,
        border: "1px solid #000",
        display: "flex",
        alignItems: "center"
    }
    return (
        <div style={teamnameStyle}>
            {props.teamname}
        </div>
    );
}

export default HMiniTeamName;