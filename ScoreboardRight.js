import React from 'react';

function ScoreboardLeft(props) {

    const sbrStyle = {
        display: "grid",
        gridTemplateColumns: "1fr",
        gridTemplateRows: "1fr 1fr 1fr",
    };

    const teamStyle = {
        backgroundColor: "#ccc"
    }

    return (
        <div style={sbrStyle}>
            <div style={teamStyle}>Team</div>
            <div>{props.vTeamName}</div>
            <div>{props.hTeamName}</div>
        </div>
    );
}

export default ScoreboardLeft;