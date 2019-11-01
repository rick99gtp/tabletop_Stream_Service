const handleClick_wp = function() {
    
    var newVArray = [...this.state.vPlayerScoreSheetCell];
    var newHArray = [...this.state.hPlayerScoreSheetCell];
    var basesArray = [...this.state.runnersOnBase];
    var basesColumnArray = [...this.state.runnersOnBaseColumn];
    var wpActive = true;
    var sbActive = true;
    var pbActive = true;
    var csActive = true;

    if(this.state.teamBatting === 0) {
  
      this.setState(prevState => {

        // runner on 3rd, move to home
        if(this.state.runnersOnBase[2] !== 99) {
          newVArray[this.state.runnersOnBase[2]].cell[this.state.runnersOnBaseColumn[2]].homeBaseText = 'WP';
          newVArray[this.state.runnersOnBase[2]].cell[this.state.runnersOnBaseColumn[2]].bgImage = 'batter-to-home.png';
  
          basesArray[2] = 99;
          basesColumnArray[2] = 0;
        }

        // runner on 2nd, move to 3rd
        if(this.state.runnersOnBase[1] !== 99) {
          newVArray[this.state.runnersOnBase[1]].cell[this.state.runnersOnBaseColumn[1]].thirdBaseText = 'WP';
          newVArray[this.state.runnersOnBase[1]].cell[this.state.runnersOnBaseColumn[1]].bgImage = 'batter-to-third.png';
  
          basesArray[2] = this.state.runnersOnBase[1];
          basesColumnArray[2] = this.state.runnersOnBaseColumn[1];

          basesArray[1] = 99;
          basesColumnArray[1] = 0;
        }

        // if runner on 1st, move to 2nd
        if(this.state.runnersOnBase[0] !== 99) {
          newVArray[this.state.runnersOnBase[0]].cell[this.state.runnersOnBaseColumn[0]].secondBaseText = 'WP';
          newVArray[this.state.runnersOnBase[0]].cell[this.state.runnersOnBaseColumn[0]].bgImage = 'batter-to-second.png';
  
          basesArray[1] = this.state.runnersOnBase[0];
          basesColumnArray[1] = this.state.runnersOnBaseColumn[0];

          basesArray[0] = 99;
          basesColumnArray[0] = 0;
        }

        if(basesArray[0] === 99) {
          if(basesArray[1] === 99) {
            if(basesArray[2] === 99) {
              wpActive = false;
              sbActive = false;
              pbActive = false;
              csActive = false;
            }
          }
        }

        return {
          vPlayerScoreSheetCell: newVArray,
          runnersOnBase: basesArray,
          runnersOnBaseColumn: basesColumnArray,
          wp_active: wpActive,
          sb_active: sbActive,
          cs_active: csActive,
          pb_active: pbActive,
          highlight_1b_stay_at_second: false
        }
      });
    }
    else {
      this.setState(prevState => {

        // runner on 3rd, move to home
        if(this.state.runnersOnBase[2] !== 99) {
          newHArray[this.state.runnersOnBase[2]].cell[this.state.runnersOnBaseColumn[2]].homeBaseText = 'WP';
          newHArray[this.state.runnersOnBase[2]].cell[this.state.runnersOnBaseColumn[2]].bgImage = 'batter-to-home.png';
  
          basesArray[2] = 99;
          basesColumnArray[2] = 0;
        }

        // runner on 2nd, move to 3rd
        if(this.state.runnersOnBase[1] !== 99) {
          newHArray[this.state.runnersOnBase[1]].cell[this.state.runnersOnBaseColumn[1]].thirdBaseText = 'WP';
          newHArray[this.state.runnersOnBase[1]].cell[this.state.runnersOnBaseColumn[1]].bgImage = 'batter-to-third.png';
  
          basesArray[2] = this.state.runnersOnBase[1];
          basesColumnArray[2] = this.state.runnersOnBaseColumn[1];

          basesArray[1] = 99;
          basesColumnArray[1] = 0;
        }

        // if runner on 1st, move to 2nd
        if(this.state.runnersOnBase[0] !== 99) {
          newHArray[this.state.runnersOnBase[0]].cell[this.state.runnersOnBaseColumn[0]].secondBaseText = 'WP';
          newHArray[this.state.runnersOnBase[0]].cell[this.state.runnersOnBaseColumn[0]].bgImage = 'batter-to-second.png';
  
          basesArray[1] = this.state.runnersOnBase[0];
          basesColumnArray[1] = this.state.runnersOnBaseColumn[0];

          basesArray[0] = 99;
          basesColumnArray[0] = 0;
        }

        if(basesArray[0] === 99) {
          if(basesArray[1] === 99) {
            if(basesArray[2] === 99) {
              wpActive = false;
              sbActive = false;
              pbActive = false;
              csActive = false;
            }
          }
        }

        return {
          hPlayerScoreSheetCell: newHArray,
          runnersOnBase: basesArray,
          runnersOnBaseColumn: basesColumnArray,
          wp_active: wpActive,
          sb_active: sbActive,
          cs_active: csActive,
          pb_active: pbActive
        }
      });
    }
  }
  
  export default handleClick_wp;