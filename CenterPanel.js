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
            <ResultsCenter btn_gb={props.btn_gb} btn_ld={props.btn_ld} btn_cs={props.btn_cs} btn_1b={props.btn_1b} btn_2b={props.btn_2b} btn_3b={props.btn_3b} btn_hr={props.btn_hr} btn_sb={props.btn_sb} btn_pb={props.btn_pb} btn_wp={props.btn_wp} btn_pop={props.btn_pop} btn_k={props.btn_k} btn_bb={props.btn_bb} btn_hbp={props.btn_hbp} btn_wp_active={props.wp_active} btn_pb_active={props.pb_active} btn_sb_active={props.sb_active} btn_cs_active={props.cs_active}/>
        </div>
    );
}

export default CenterPanel;