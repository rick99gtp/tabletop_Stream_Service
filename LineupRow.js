import React from 'react';

function LineupRow(props) {

    var lineupStyle = {
        fontSize: "28px",
        display: "grid",
        gridTemplateColumns: "1fr 7fr 1fr",
        gridTemplateRows: "1fr .5fr"
    };

    var lineupNumStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }

    var lineupNameStyle = {
        display: "flex",
        alignItems: "center"
    };

    var lineupPosStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    };

    return (
        <div style={lineupStyle}>
            <div style={lineupNumStyle}>
                {props.lineupNum}
            </div>
            <div style={lineupNameStyle}>
                {props.name}
            </div>
            <div style={lineupPosStyle}>
                {props.pos}
            </div>
        </div>
    );
}

export default LineupRow;