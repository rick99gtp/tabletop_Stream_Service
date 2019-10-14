import React from 'react';
import HomeLineup from './HomeLineup';
import ResultsRight from './ResultsRight';
import ScoreboardRight from './ScoreboardRight';

function LeftPanel(props) {

    var leftpanel = {
        display: "grid",
        gridTemplateColumns: "1fr",
        gridTemplateRows: "1fr 6fr 1fr"
    };

    return (
        <div style={leftpanel}>
            <ScoreboardRight />
            <HomeLineup {...props}/>
            <ResultsRight pitcherName={props.hPitcherName} pitcherThrows={props.hPitcherThrows} />
        </div>
    )
}

export default LeftPanel;