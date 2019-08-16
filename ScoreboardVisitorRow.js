import React from 'react';

function ScoreboardVisitorRow(props) {

    var visitorRowName = {
        paddingLeft: "10px"
    };

    var visRow = {
        textAlign: "center"
    };

    return (
        <React.Fragment>
            <div style={visitorRowName}>{props.teamName}</div>
            <div style={visRow} className="visRow1">0</div>
            <div style={visRow} className="visRow2">0</div>
            <div style={visRow} className="visRow3">0</div>
            <div style={visRow} className="visRow4">0</div>
            <div style={visRow} className="visRow5">0</div>
            <div style={visRow} className="visRow6">0</div>
            <div style={visRow} className="visRow7">0</div>
            <div style={visRow} className="visRow8">0</div>
            <div style={visRow} className="visRow9">0</div>
            <div style={visRow} className="visRow10">0</div>
            <div style={visRow} className="visRow11">0</div>
            <div style={visRow} className="visRow12">0</div>
            <div style={visRow} className="visRow13">0</div>
            <div style={visRow} className="visRow14">0</div>
            <div style={visRow} className="visRow15">0</div>
        </React.Fragment>
    );
}

export default ScoreboardVisitorRow;