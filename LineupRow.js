import React from 'react';

function LineupRow(props) {

    const lineupStyle = {
        fontSize: "28px",
        display: "grid",
        gridTemplateColumns: "1fr 6fr 2fr",
        gridTemplateRows: "1fr"
    };

    const lineupNumStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }

    const lineupNameStyle = {
        display: "flex",
        alignItems: "center",
        paddingLeft: "5px"
    };

    const lineupPosStyle = {
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