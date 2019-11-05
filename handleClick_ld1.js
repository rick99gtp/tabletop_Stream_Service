const handleClick_ld1 = function() {
    
    var newArray = [...this.state.vPlayerScoreSheetCell];
    var newVBatter = 0;
    var newVColumn = 0;
    
    if(this.state.teamBatting === 0) {

      newArray[this.state.vBatter].cell[this.state.vColumn].centertext = 'L1';

      this.setState(prevState => {

        if(prevState.vBatter === 8) {
          // change current row to normal
          newArray[this.state.vBatter].cell[this.state.vColumn].basesbgcolor = "transparent";
          newArray[0].cell[prevState.vColumn + 1].basesbgcolor = "#fdf1d4";

          newVBatter = 0;
          newVColumn = prevState.vColumn + 1;

        }
        else {
          newArray[this.state.vBatter].cell[this.state.vColumn].basesbgcolor = "transparent";
          newArray[prevState.vBatter + 1].cell[prevState.vColumn].basesbgcolor = "#fdf1d4";

          newVBatter = prevState.vBatter + 1;
          newVColumn = prevState.vColumn;
        }

        return {
          outs: prevState.outs + 1,
          vPlayerScoreSheetCell: newArray,
          vBatter: newVBatter,
          vColumn: newVColumn,
          show_ld_modal: false
        }
      });
    }
    else {
    }
}

export default handleClick_ld1;