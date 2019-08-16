import React from 'react';

function HMiniTeamRuns(props) {

    var runsStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gridColumn: 5,
        gridRow: 3,
        border: "1px solid #000"
    };

    return (
        <div style={runsStyle}>
            {props.runs}
        </div>
    );
}

export default HMiniTeamRuns;