import React from 'react';
import Lineup from './Lineup';

function HomeLineup(props) {
    return (
        <Lineup
            batter1name={props.hBatter1Name}
            batter2name={props.hBatter2Name}
            batter3name={props.hBatter3Name}
            batter4name={props.hBatter4Name}
            batter5name={props.hBatter5Name}
            batter6name={props.hBatter6Name}
            batter7name={props.hBatter7Name}
            batter8name={props.hBatter8Name}
            batter9name={props.hBatter9Name}
            pos1={props.hBatter1Pos}
            pos2={props.hBatter2Pos}
            pos3={props.hBatter3Pos}
            pos4={props.hBatter4Pos}
            pos5={props.hBatter5Pos}
            pos6={props.hBatter6Pos}
            pos7={props.hBatter7Pos}
            pos8={props.hBatter8Pos}
            pos9={props.hBatter9Pos}
    />
    )
}

export default HomeLineup;