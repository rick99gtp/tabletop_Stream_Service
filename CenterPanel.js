import React from 'react';
import Scoreboard from './Scoreboard';
import ScoreSheet from './ScoreSheet';
import ResultsCenter from './ResultsCenter';

function CenterPanel(props) {

    const cpStyle = {
        display: "grid",
        gridTemplateColumns: "1",
        gridTemplateRows: "1fr 6fr 1fr",
        border: 0,
        padding: 0,
        boxSizing: "border-box"
    };

    return (
        <div style={cpStyle}>
            <Scoreboard />
            <ScoreSheet />
            <ResultsCenter />
        </div>
    );
}

export default CenterPanel;