import React from 'react';
import TopPanel from './TopPanel';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

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
      runnerOn3rd: 0
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
      </div>
    );
  }
  
}

export default App;
