const handleClick_gb_ok = function() {
    let newVArray = [...this.state.vPlayerScoreSheetCell];
    let newHArray = [...this.state.hPlayerScoreSheetCell];
    let basesArray = [...this.state.runnersOnBase];
    let basesColumnArray = [...this.state.runnersOnBaseColumn];
    let newVBatter = 0;
    let newHBatter = 0;
    let newVColumn = 0;
    let newHColumn = 0;
    let curText = this.state.gb_result;

    // take gb_result and put in centertext
    if(this.state.teamBatting === 0) {
  
        newVArray[this.state.vBatter].cell[this.state.vColumn].centertext = curText;
    
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

          return {
            vPlayerScoreSheetCell: newVArray,
            vBatter: newVBatter,
            vColumn: newVColumn,
            runnersOnBase: basesArray,
            runnersOnBaseColumn: basesColumnArray,
            show_gb_modal: false,
            gb_result: ''
        }
        });
    }
}

export default handleClick_gb_ok;