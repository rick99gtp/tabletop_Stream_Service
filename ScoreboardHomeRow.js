import React from 'react';

function ScoreboardHomeRow(props) {

    var homeRow = {
        textAlign: "center"
    };

    return (
        <React.Fragment>
            <div style={homeRow} className="homeRow1">0</div>
            <div style={homeRow} className="homeRow2">0</div>
            <div style={homeRow} className="homeRow3">0</div>
            <div style={homeRow} className="homeRow4">0</div>
            <div style={homeRow} className="homeRow5">0</div>
            <div style={homeRow} className="homeRow6">0</div>
            <div style={homeRow} className="homeRow7">0</div>
            <div style={homeRow} className="homeRow8">0</div>
            <div style={homeRow} className="homeRow9">0</div>
            <div style={homeRow} className="homeRow10">0</div>
            <div style={homeRow} className="homeRow11">0</div>
            <div style={homeRow} className="homeRow12">0</div>
            <div style={homeRow} className="homeRow13">0</div>
            <div style={homeRow} className="homeRow14">0</div>
            <div style={homeRow} className="homeRow15">0</div>
            <div style={homeRow} className="homeRowR">0</div>
            <div style={homeRow} className="homeRowH">0</div>
            <div style={homeRow} className="homeRowE">0</div>
        </React.Fragment>
    );
}

export default ScoreboardHomeRow;