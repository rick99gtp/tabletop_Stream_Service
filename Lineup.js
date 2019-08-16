import React from 'react';
import LineupRow from './LineupRow';

function Lineup(props) {

    var vlineupStyle = {
        backgroundColor: "#ddd",
        minHeight: "60vh"
    };

    return (
        <div style={vlineupStyle}>
            <LineupRow
                name={props.batter1name}
                lineupNum="1"
                pos={props.pos1}
            />
            <LineupRow
                name={props.batter2name}
                lineupNum="2"
                pos={props.pos2}
            />
            <LineupRow
                name={props.batter3name}
                lineupNum="3"
                pos={props.pos3}
            />
            <LineupRow
                name={props.batter4name}
                lineupNum="4"
                pos={props.pos4}
            />
            <LineupRow
                name={props.batter5name}
                lineupNum="5"
                pos={props.pos5}
            />
            <LineupRow
                name={props.batter6name}
                lineupNum="6"
                pos={props.pos6}
            />
            <LineupRow
                name={props.batter7name}
                lineupNum="7"
                pos={props.pos7}
            />
            <LineupRow
                name={props.batter8name}
                lineupNum="8"
                pos={props.pos8}
            />
            <LineupRow
                name={props.batter9name}
                lineupNum="9"
                pos={props.pos9}
            />
        </div>
    );
}

export default Lineup;