const handleClick_2b = function() {
    
    var newVArray = [...this.state.vPlayerScoreSheetCell];
    var newHArray = [...this.state.hPlayerScoreSheetCell];
    var basesArray = [...this.state.runnersOnBase];
    var basesColumnArray = [...this.state.runnersOnBaseColumn];
    var newVBatter = 0;
    var newHBatter = 0;
    var newVColumn = 0;
    var newHColumn = 0;
    let showModal = false;

    let runnerOn1stStayAtThird = false;
    
    if(this.state.runnersOnBase[0] !== 99) {
      runnerOn1stStayAtThird = true;
    }

    if(this.state.teamBatting === 0) {
  
      // if no runners on 1st, don't show modal
      if(this.state.runnersOnBase[0] === 99) {
        newVArray[this.state.vBatter].cell[this.state.vColumn].firstbasetext = '2B';
  
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

          // runner on 3rd scores
          if(this.state.runnersOnBase[2] !== 99) {
              newVArray[this.state.runnersOnBase[2]].cell[this.state.runnersOnBaseColumn[2]].bgImage = 'batter-to-home.png';
  
              basesArray[2] = 99;
              basesColumnArray[2] = 0;
          }

          // runner on 2nd scores
          if(this.state.runnersOnBase[1] !== 99) {
              newVArray[this.state.runnersOnBase[1]].cell[this.state.runnersOnBaseColumn[1]].bgImage = 'batter-to-home.png';
  
              basesArray[1] = 99;
              basesColumnArray[1] = 0;
          }

          // batter
          newVArray[this.state.vBatter].cell[this.state.vColumn].bgImage = 'batter-to-second.png';
          basesArray[1] = this.state.vBatter;
          basesColumnArray[1] = this.state.vColumn;

          return {
            vPlayerScoreSheetCell: newVArray,
            vBatter: newVBatter,
            vColumn: newVColumn,
            runnersOnBase: basesArray,
            runnersOnBaseColumn: basesColumnArray,
            show_bb_modal: false,
            wp_active: true,
            pb_active: true,
            sb_active: true,
            cs_active: true,
            show_2b_modal: showModal,
            highlight_2b_stay_at_third: runnerOn1stStayAtThird,
            highlight_2b_scores: false
          }
        });
      }
      else {
        // runner on 1st, show 2B Modal to see if runner goes home on double
        if(this.state.runnersOnBase[0] !== 99) {
          this.setState(prevState => {
            return {
              show_2b_modal: true,
              highlight_2b_stay_at_third: true,
              highlight_2b_scores: false
            }
          });
        }
      }
    }
    else {
        
    }
  }
  
  export default handleClick_2b;