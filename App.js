import React from 'react';
import LeftPanel from './LeftPanel';
import CenterPanel from './CenterPanel';
import RightPanel from './RightPanel';
import './index.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      vTeamName: "Rangers",
      hTeamName: "Angels",
      vTeamAbbr: "TEX",
      hTeamAbbr: "LAA",
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
          pos: "C"
        },
        {
          name: "vBatter2",
          pos: "1B"
        },
        {
          name: "vBatter3",
          pos: "2B"
        },
        {
          name: "vBatter4",
          pos: "3B"
        },
        {
          name: "vBatter5",
          pos: "SS"
        },
        {
          name: "vBatter6",
          pos: "LF"
        },
        {
          name: "vBatter7",
          pos: "CF"
        },
        {
          name: "vBatter8",
          pos: "RF"
        },
        {
          name: "vBatter9",
          pos: "DH"
        }
      ],
      hLineup: [
        {
          name: "hBatter1",
          pos: "C"
        },
        {
          name: "hBatter2",
          pos: "1B"
        },
        {
          name: "hBatter3",
          pos: "2B"
        },
        {
          name: "hBatter4",
          pos: "3B"
        },
        {
          name: "hBatter5",
          pos: "SS"
        },
        {
          name: "hBatter6",
          pos: "LF"
        },
        {
          name: "hBatter7",
          pos: "CF"
        },
        {
          name: "hBatter8",
          pos: "RF"
        },
        {
          name: "hBatter9",
          pos: "DH"
        }
      ]
    };
  } 

  render() {
    var appMain = {
      display: "grid",
      gridTemplateColumns: "1fr 4fr 1fr",
      gridTemplateRows: "1fr",
      margin: "0",
      padding: "0",
      boxSizing: "border-box",
      height: "100vh",
      width: "100vw"
    };

    return (
      <div style={appMain}>
        <LeftPanel
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
          vTeamName={this.state.vTeamName}
          hTeamName={this.state.hTeamName}
        />
        <CenterPanel
          
        />
        <RightPanel />
      </div>
    );
  }
  
}

export default App;
