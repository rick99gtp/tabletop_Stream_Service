import React from 'react';

function VMiniTeamName(props) {

    var teamNameStyle = {
        gridColumn: "2/5",
        gridRow: 2,
        border: "1px solid #000",
        display: "flex",
        alignItems: "center"
    };

    return (
        <div style={teamNameStyle}>
            {props.teamName}
        </div>
    );
}

export default VMiniTeamName;