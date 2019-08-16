import React from 'react';
import Lineup from './Lineup';

function VisLineup(props) {
    
    return (
        <Lineup
            batter1name={props.vBatter1Name}
            batter2name={props.vBatter2Name}
            batter3name={props.vBatter3Name}
            batter4name={props.vBatter4Name}
            batter5name={props.vBatter5Name}
            batter6name={props.vBatter6Name}
            batter7name={props.vBatter7Name}
            batter8name={props.vBatter8Name}
            batter9name={props.vBatter9Name}
            pos1={props.vBatter1Pos}
            pos2={props.vBatter2Pos}
            pos3={props.vBatter3Pos}
            pos4={props.vBatter4Pos}
            pos5={props.vBatter5Pos}
            pos6={props.vBatter6Pos}
            pos7={props.vBatter7Pos}
            pos8={props.vBatter8Pos}
            pos9={props.vBatter9Pos}
    />
    )
}

export default VisLineup;