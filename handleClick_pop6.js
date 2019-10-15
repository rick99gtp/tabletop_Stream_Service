const handleClick_pop6 = function() {
    
    var newArray = [...this.state.vPlayerScoreSheetCell];
    var newVBatter = 0;
    var newHBatter = 0;
    var newVColumn = 0;
    var newHColumn = 0;
    
    if(this.state.teamBatting === 0) {

      newArray[this.state.vBatter].cell[this.state.vColumn].centertext = 'P6';

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
          show_pop_modal: false
        }
      });
    }
    else {
      newArray[this.state.hBatter].cell[this.state.hColumn].centertext = 'P6';

      this.setState(prevState => {

        if(prevState.hBatter === 8) {
          // change current row to normal
          newArray[this.state.hBatter].cell[this.state.hColumn].basesbgcolor = "transparent";
          newArray[0].cell[prevState.hColumn + 1].basesbgcolor = "#fdf1d4";

          newHBatter = 0;
          newHColumn = prevState.hColumn + 1;
        }
        else {
          newArray[this.state.hBatter].cell[this.state.hColumn].basesbgcolor = "transparent";
          newArray[prevState.hBatter + 1].cell[prevState.hColumn].basesbgcolor = "#fdf1d4";

          newHBatter = prevState.hBatter + 1;
          newHColumn = prevState.hColumn;
        }

        return {
          outs: prevState.outs + 1,
          hPlayerScoreSheetCell: newArray,
          hBatter: newHBatter,
          vColumn: newHColumn,
          show_pop_modal: false
        }
      });
    }
}

export default handleClick_pop6;