import React from 'react';

function ScoreboardLeft(props) {

    const sblStyle = {
        display: "grid",
        gridTemplateColumns: "1fr",
        gridTemplateRows: "1fr 1fr 1fr",
    };

    const teamStyle = {
        backgroundColor: "#ccc"
    }

    return (
        <div style={sblStyle}>
            <div style={teamStyle}>Team</div>
            <div>{props.vTeamName}</div>
            <div>{props.hTeamName}</div>
        </div>
    );
}

export default ScoreboardLeft;