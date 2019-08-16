import React from 'react';
import Scoreboard from './Scoreboard';
import MiniScoreboard from './MiniScoreboard';
import BaseRunners from './BaseRunners';

function TopPanel(props) {

    var toppanel = {
        height: "10vh",
        display: "flex"
    };

    return (
        <div style={toppanel}>
            <Scoreboard
                vTeamName={props.vTeamName}
                hTeamName={props.hTeamName}
            />
            <MiniScoreboard
                inning={props.inning}
                teamBatting={props.teamBatting}
                vPitcherName={props.vPitcherName}
                hPitcherName={props.hPitcherName}
                vPitcherPitches={props.vPitcherPitches}
                hPitcherPitches={props.hPitcherPitches}
                vTeamAbbr={props.vTeamAbbr}
                hTeamAbbr={props.hTeamAbbr}
                vRuns={props.vRuns}
                hRuns={props.hRuns}
                outs={props.outs}
                pitchCount={props.pitchCount}
            />
            <BaseRunners
                runnerOn1st={props.runnerOn1st}
                runnerOn2nd={props.runnerOn2nd}
                runnerOn3rd={props.runnerOn3rd}
            />
        </div>
    )
}

export default TopPanel;