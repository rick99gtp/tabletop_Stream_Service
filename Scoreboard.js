import React from 'react';
import ScoreboardHeader from './ScoreboardHeader';
import ScoreboardVisitorRow from './ScoreboardVisitorRow';
import ScoreboardHomeRow from './ScoreboardHomeRow';

function Scoreboard() {
    var scoreboardStyle = {
        width: "60%",
        display: "grid",
        gridTemplateColumns: "20% repeat(10, 1fr)",
        gridTemplateRows: "repeat(3, auto",
    };

    return (
        <div style={scoreboardStyle}>
            <ScoreboardHeader />
            <ScoreboardVisitorRow />
            <ScoreboardHomeRow />
        </div>
    );
}

export default Scoreboard;