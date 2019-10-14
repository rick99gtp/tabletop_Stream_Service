import React from 'react';
import ScoreboardLeft from './ScoreboardLeft';
import VisLineup from './VisLineup';
import ResultsLeft from './ResultsLeft';

function LeftPanel(props) {

    var leftpanel = {
        display: "grid",
        gridTemplateColumns: "1fr",
        gridTemplateRows: "1fr 6fr 1fr",
        fontSize: "15px"
    };

    return (
        <div style={leftpanel}>
            <ScoreboardLeft
                vTeamName={props.vTeamName}
                hTeamName={props.hTeamName}
            />
            <VisLineup {...props}/>
            <ResultsLeft />
        </div>
    )
}

export default LeftPanel;