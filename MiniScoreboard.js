import React from 'react';
import InningIndicator from './InningIndicator';
import MiniPitcherInfo from './MiniPitcherInfo';
import VMiniTeamName from './VMiniTeamName';
import HMiniTeamName from './HMiniTeamName';
import VMiniTeamRuns from './VMiniTeamRuns';
import HMiniTeamRuns from './HMiniTeamRuns';
import MiniOutsAndCount from './MiniOutsAndCount';

function MiniScoreboard(props) {

    var miniStyle = {
        width: "10%",
        display: "grid",
        gridTemplateColumns: "15% 23% 24% 23% 15%",
        gridTemplateRows: "20% 30% 30% 20%",
        fontSize: "24px",
        padding: "5px 5px 5px 0px"
    };

    return (
        <div style={miniStyle}>
            <InningIndicator
                inning={props.inning}
                indicator={props.teamBatting}
            />
            <MiniPitcherInfo
                indicator={props.teamBatting}
                vPitcherName={props.vPitcherName}
                hPitcherName={props.hPitcherName}
                vPitches={props.vPitcherPitches}
                hPitches={props.hPitcherPitches}
            />
            <VMiniTeamName
                teamName={props.vTeamAbbr}
            />
            <HMiniTeamName
                teamname={props.hTeamAbbr}
            />
            <VMiniTeamRuns
                runs={props.vRuns}
            />
            <HMiniTeamRuns
                runs={props.hRuns}
            />
            <MiniOutsAndCount
                outs={props.outs}
                count={props.pitchCount}
            />
        </div>
    );
}

export default MiniScoreboard;