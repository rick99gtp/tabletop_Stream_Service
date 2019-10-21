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

    let scoresheetToShow;

    if(props.teamBatting === 0) {
        scoresheetToShow = <ScoreSheet playerCell={props.vPlayerCell} />;
    }
    else {
        scoresheetToShow = <ScoreSheet playerCell={props.hPlayerCell} />;
    }

    return (
        <div style={cpStyle}>
            <Scoreboard />
            {scoresheetToShow}
            <ResultsCenter btn_wp={props.btn_wp} btn_pop={props.btn_pop} btn_k={props.btn_k} btn_bb={props.btn_bb} btn_hbp={props.btn_hbp} btn_wp_active={props.wp_active} btn_pb={props.pb_active} btn_sb={props.sb_active} btn_cs={props.cs_active}/>
        </div>
    );
}

export default CenterPanel;