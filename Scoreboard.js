import React from 'react';
import ScoreboardHeader from './ScoreboardHeader';
import ScoreboardVisitorRow from './ScoreboardVisitorRow';
import ScoreboardHomeRow from './ScoreboardHomeRow';

function Scoreboard(props) {

    var scoreboardStyle = {
        display: "grid",
        gridTemplateColumns: "repeat(18, 1fr)",
        gridTemplateRows: "repeat(3, 1fr)"
    };

    return (
        <div style={scoreboardStyle}>
            <ScoreboardHeader />
            <ScoreboardVisitorRow teamName={props.vTeamName}/>
            <ScoreboardHomeRow teamName={props.hTeamName}/>
        </div>
    );
}

export default Scoreboard;