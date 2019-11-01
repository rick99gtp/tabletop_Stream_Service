const handleClick_1b = function() {

    let newVArray = [...this.state.vPlayerScoreSheetCell];
    let newHArray = [...this.state.hPlayerScoreSheetCell];
    let basesArray = [...this.state.runnersOnBase];
    let basesColumnArray = [...this.state.runnersOnBaseColumn];
    let newVBatter = 0;
    let newHBatter = 0;
    let newVColumn = 0;
    let newHColumn = 0;
    
    if(this.state.teamBatting === 0) {

      // if no runners on 1st or 2nd, don't show modal
      if(this.state.runnersOnBase[0] === 99 && this.state.runnersOnBase[1] === 99) {
        newVArray[this.state.vBatter].cell[this.state.vColumn].firstbasetext = '1B';
  
        this.setState(prevState => {
  
          if(prevState.vBatter === 8) {
            // change current row to normal
            newVArray[this.state.vBatter].cell[this.state.vColumn].basesbgcolor = "transparent";
            newVArray[0].cell[prevState.vColumn + 1].basesbgcolor = "#fdf1d4";
  
            newVBatter = 0;
            newVColumn = prevState.vColumn + 1;
  
          }
          else {
            newVArray[this.state.vBatter].cell[this.state.vColumn].basesbgcolor = "transparent";
            newVArray[prevState.vBatter + 1].cell[prevState.vColumn].basesbgcolor = "#fdf1d4";
  
            newVBatter = prevState.vBatter + 1;
            newVColumn = prevState.vColumn;
          }

          if(this.state.runnersOnBase[2] !== 99) {
            newVArray[this.state.runnersOnBase[2]].cell[this.state.runnersOnBaseColumn[2]].bgImage = 'batter-to-home.png';
            basesArray[2] = 99;
            basesColumnArray[2] = 0;
          }

          newVArray[this.state.vBatter].cell[this.state.vColumn].bgImage = 'batter-to-first.png';
          basesArray[0] = this.state.vBatter;
          basesColumnArray[0] = this.state.vColumn;
        
          return {
            vPlayerScoreSheetCell: newVArray,
            vBatter: newVBatter,
            vColumn: newVColumn,
            runnersOnBase: basesArray,
            runnersOnBaseColumn: basesColumnArray,
            wp_active: true,
            pb_active: true,
            sb_active: true,
            cs_active: true,
            show_1b_modal: false,
            highlight_1b_stay_at_second: true
          }
        });
      }
      else {
        

        this.setState({
          show_1b_modal: true,
          vPlayerScoreSheetCell: newVArray,
          runnersOnBase: basesArray,
          runnersOnBaseColumn: basesColumnArray
        });
      }
    }
    else {
      // if bases are empty
      if(this.state.runnersOnBase[0] === 99 && this.state.runnersOnBase[1] === 99 && this.state.runnersOnBase[2] === 99) {
        newHArray[this.state.hBatter].cell[this.state.hColumn].firstbasetext = '1B';
  
        this.setState(prevState => {
  
          if(prevState.hBatter === 8) {
            // change current row to normal
            newHArray[this.state.hBatter].cell[this.state.hColumn].basesbgcolor = "transparent";
            newHArray[0].cell[prevState.hColumn + 1].basesbgcolor = "#fdf1d4";
  
            newHBatter = 0;
            newHColumn = prevState.hColumn + 1;
  
          }
          else {
            newHArray[this.state.hBatter].cell[this.state.hColumn].basesbgcolor = "transparent";
            newHArray[prevState.hBatter + 1].cell[prevState.hColumn].basesbgcolor = "#fdf1d4";
  
            newHBatter = prevState.hBatter + 1;
            newHColumn = prevState.hColumn;
          }

            newHArray[this.state.hBatter].cell[this.state.hColumn].bgImage = 'batter-to-first.png';
            basesArray[0] = this.state.hBatter;
            basesColumnArray[0] = this.state.hColumn;
        
            return {
              hPlayerScoreSheetCell: newHArray,
              hBatter: newHBatter,
              hColumn: newHColumn,
              runnersOnBase: basesArray,
              runnersOnBaseColumn: basesColumnArray,
              wp_active: true,
              pb_active: true,
              sb_active: true,
              cs_active: true,
              show_1b_modal: false
            }
        });
      }
      else {
        this.setState({
          show_1b_modal: true
        });
      }
    }
  }
  
  export default handleClick_1b;