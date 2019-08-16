import React from 'react';
import TopPanel from './TopPanel';
import CenterPanel from './CenterPanel';

import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      vTeamName: "vTeamName",
      hTeamName: "hTeamName",
      vTeamAbbr: "VIS",
      hTeamAbbr: "HOM",
      vPitcherName: "vPitcher",
      hPitcherName: "hPitcher",
      vPitcherPitches: 0,
      hPitcherPitches: 0,
      inning: 1,
      teamBatting: 0,
      outs: 0,
      pitchCount: "0-0",
      vRuns: 0,
      hRuns: 0,
      runnerOn1st: 0,
      runnerOn2nd: 0,
      runnerOn3rd: 0,
      vLineup: [
        {
          name: "vBatter1",
          pos: "vPos1"
        },
        {
          name: "vBatter2",
          pos: "vPos2"
        },
        {
          name: "vBatter3",
          pos: "vPos3"
        },
        {
          name: "vBatter4",
          pos: "vPos4"
        },
        {
          name: "vBatter5",
          pos: "vPos5"
        },
        {
          name: "vBatter6",
          pos: "vPos6"
        },
        {
          name: "vBatter7",
          pos: "vPos7"
        },
        {
          name: "vBatter8",
          pos: "vPos8"
        },
        {
          name: "vBatter9",
          pos: "vPos9"
        }
      ],
      hLineup: [
        {
          name: "hBatter1",
          pos: "hPos1"
        },
        {
          name: "hBatter2",
          pos: "hPos2"
        },
        {
          name: "hBatter3",
          pos: "hPos3"
        },
        {
          name: "hBatter4",
          pos: "hPos4"
        },
        {
          name: "hBatter5",
          pos: "hPos5"
        },
        {
          name: "hBatter6",
          pos: "hPos6"
        },
        {
          name: "hBatter7",
          pos: "hPos7"
        },
        {
          name: "hBatter8",
          pos: "hPos8"
        },
        {
          name: "hBatter9",
          pos: "hPos9"
        }
      ]
    };
  } 
  
  render() {
    var appMain = {
      width: "100vw",
      height: "100vh",
      margin: "0",
      padding: "0",
      boxSizing: "border-box"
    };

    return (
      <div style={appMain}>
        <TopPanel
          inning={this.state.inning}
          teamBatting={this.state.teamBatting}
          outs={this.state.outs}
          pitchCount={this.state.pitchCount}
          vRuns={this.state.vRuns}
          hRuns={this.state.hRuns}
          vPitcherPitches={this.state.vPitcherPitches}
          hPitcherPitches={this.state.hPitcherPitches}
          vTeamAbbr={this.state.vTeamAbbr}
          hTeamAbbr={this.state.hTeamAbbr}
          vPitcherName={this.state.vPitcherName}
          hPitcherName={this.state.hPitcherName}
          vTeamName={this.state.vTeamName}
          hTeamName={this.state.hTeamName}
          runnerOn1st={this.state.runnerOn1st}
          runnerOn2nd={this.state.runnerOn2nd}
          runnerOn3rd={this.state.runnerOn3rd}
        />
        <CenterPanel
          vBatter1Name={this.state.vLineup[0].name}
          vBatter2Name={this.state.vLineup[1].name}
          vBatter3Name={this.state.vLineup[2].name}
          vBatter4Name={this.state.vLineup[3].name}
          vBatter5Name={this.state.vLineup[4].name}
          vBatter6Name={this.state.vLineup[5].name}
          vBatter7Name={this.state.vLineup[6].name}
          vBatter8Name={this.state.vLineup[7].name}
          vBatter9Name={this.state.vLineup[8].name}
          vBatter1Pos={this.state.vLineup[0].pos}
          vBatter2Pos={this.state.vLineup[1].pos}
          vBatter3Pos={this.state.vLineup[2].pos}
          vBatter4Pos={this.state.vLineup[3].pos}
          vBatter5Pos={this.state.vLineup[4].pos}
          vBatter6Pos={this.state.vLineup[5].pos}
          vBatter7Pos={this.state.vLineup[6].pos}
          vBatter8Pos={this.state.vLineup[7].pos}
          vBatter9Pos={this.state.vLineup[8].pos}
          hBatter1Name={this.state.hLineup[0].name}
          hBatter2Name={this.state.hLineup[1].name}
          hBatter3Name={this.state.hLineup[2].name}
          hBatter4Name={this.state.hLineup[3].name}
          hBatter5Name={this.state.hLineup[4].name}
          hBatter6Name={this.state.hLineup[5].name}
          hBatter7Name={this.state.hLineup[6].name}
          hBatter8Name={this.state.hLineup[7].name}
          hBatter9Name={this.state.hLineup[8].name}
          hBatter1Pos={this.state.hLineup[0].pos}
          hBatter2Pos={this.state.hLineup[1].pos}
          hBatter3Pos={this.state.hLineup[2].pos}
          hBatter4Pos={this.state.hLineup[3].pos}
          hBatter5Pos={this.state.hLineup[4].pos}
          hBatter6Pos={this.state.hLineup[5].pos}
          hBatter7Pos={this.state.hLineup[6].pos}
          hBatter8Pos={this.state.hLineup[7].pos}
          hBatter9Pos={this.state.hLineup[8].pos}
        />
      </div>
    );
  }
  
}

export default App;
