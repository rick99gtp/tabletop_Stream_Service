import React from 'react';
import VisLineup from './VisLineup';
import ScoreSheet from './ScoreSheet';
import HomeLineup from './HomeLineup';

function CenterPanel(props) {

    var centerpanel = {
        display: "grid",
        gridTemplateColumns: "20% 60% 20%",
        gridTemplateRows: "auto"
    };

    return (
        <div style={centerpanel}>
            <VisLineup {...props}/>
            <ScoreSheet />
            <HomeLineup {...props}/>
        </div>
    );
}

export default CenterPanel;