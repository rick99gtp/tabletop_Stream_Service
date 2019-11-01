const handleClick_1b = function() {

    let newVArray = [...this.state.vPlayerScoreSheetCell];
    let newHArray = [...this.state.hPlayerScoreSheetCell];
    let basesArray = [...this.state.runnersOnBase];
    let basesColumnArray = [...this.state.runnersOnBaseColumn];
    let newVBatter = 0;
    let newHBatter = 0;
    let newVColumn = 0;
    let newHColumn = 0;

    let runnerOn1stStayAtSecond = false;
    
    let runnerOn2ndStayAtThird = false;
    
    if(this.state.runnersOnBase[0] !== 99) {
      runnerOn1stStayAtSecond = true;
    }

    if(this.state.runnersOnBase[1] !== 99) {
      runnerOn2ndStayAtThird = true;
    }

    console.log(runnerOn1stStayAtSecond);
    console.log(runnerOn2ndStayAtThird);
    
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
            highlight_1b_stay_at_second: runnerOn1stStayAtSecond,
            highlight_1b_stay_at_third: runnerOn2ndStayAtThird
          }
        });
      }
      else {
        this.setState({
          show_1b_modal: true,
          vPlayerScoreSheetCell: newVArray,
          runnersOnBase: basesArray,
          runnersOnBaseColumn: basesColumnArray,
          highlight_1b_stay_at_second: runnerOn1stStayAtSecond,
          highlight_1b_stay_at_third: runnerOn2ndStayAtThird
        });
      }
    }
    else {
      
    }
  }
  
  export default handleClick_1b;