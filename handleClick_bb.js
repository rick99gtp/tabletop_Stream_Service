const handleClick_bb = function(result) {
    
  var newVArray = [...this.state.vPlayerScoreSheetCell];
  var newHArray = [...this.state.hPlayerScoreSheetCell];
  var basesArray = [...this.state.runnersOnBase];
  var basesColumnArray = [...this.state.runnersOnBaseColumn];
  var newVBatter = 0;
  var newHBatter = 0;
  var newVColumn = 0;
  var newHColumn = 0;

  if(this.state.teamBatting === 0) {

    newVArray[this.state.vBatter].cell[this.state.vColumn].firstbasetext = 'BB';

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

      if(this.state.runnersOnBase[0] !== 99) {
        if(this.state.runnersOnBase[1] !== 99) {
            if(this.state.runnersOnBase[2] !== 99) {
              // bases loaded
              newVArray[this.state.runnersOnBase[2]].cell[this.state.runnersOnBaseColumn[2]].bgImage = 'batter-to-home.png';
              newVArray[this.state.runnersOnBase[1]].cell[this.state.runnersOnBaseColumn[1]].bgImage = 'batter-to-third.png';
              newVArray[this.state.runnersOnBase[0]].cell[this.state.runnersOnBaseColumn[0]].bgImage = 'batter-to-second.png';

              basesArray[2] = this.state.runnersOnBase[1];
              basesColumnArray[2] = this.state.runnersOnBaseColumn[1];
              basesArray[1] = this.state.runnersOnBase[0];
              basesColumnArray[1] = this.state.runnersOnBaseColumn[0];
            }
            else {
              // runners on 1st and 2nd
              newVArray[this.state.runnersOnBase[1]].cell[this.state.runnersOnBaseColumn[1]].bgImage = 'batter-to-third.png';
              newVArray[this.state.runnersOnBase[0]].cell[this.state.runnersOnBaseColumn[0]].bgImage = 'batter-to-second.png';

              basesArray[2] = this.state.runnersOnBase[1];
              basesColumnArray[2] = this.state.runnersOnBaseColumn[1];

              basesArray[1] = this.state.runnersOnBase[0];
              basesColumnArray[1] = this.state.runnersOnBaseColumn[0];
            }
        }
        else {
          // runner on 1st only
          newVArray[this.state.runnersOnBase[0]].cell[this.state.runnersOnBaseColumn[0]].bgImage = 'batter-to-second.png';

          basesArray[1] = this.state.runnersOnBase[0];
          basesColumnArray[1] = this.state.runnersOnBaseColumn[0];
        }
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
        show_bb_modal: false
      }
    });
  }
  else {
    newHArray[this.state.hBatter].cell[this.state.hColumn].firstbasetext = 'BB';

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

      if(this.state.runnersOnBase[0] !== 99) {
        if(this.state.runnersOnBase[1] !== 99) {
            if(this.state.runnersOnBase[2] !== 99) {
              // bases loaded
              newHArray[this.state.runnersOnBase[2]].cell[this.state.runnersOnBaseColumn[2]].bgImage = 'batter-to-home.png';
              newHArray[this.state.runnersOnBase[1]].cell[this.state.runnersOnBaseColumn[1]].bgImage = 'batter-to-third.png';
              newHArray[this.state.runnersOnBase[0]].cell[this.state.runnersOnBaseColumn[0]].bgImage = 'batter-to-second.png';

              basesArray[2] = this.state.runnersOnBase[1];
              basesColumnArray[2] = this.state.runnersOnBaseColumn[1];
              basesArray[1] = this.state.runnersOnBase[0];
              basesColumnArray[1] = this.state.runnersOnBaseColumn[0];
            }
            else {
              // runners on 1st and 2nd
              newHArray[this.state.runnersOnBase[1]].cell[this.state.runnersOnBaseColumn[1]].bgImage = 'batter-to-third.png';
              newHArray[this.state.runnersOnBase[0]].cell[this.state.runnersOnBaseColumn[0]].bgImage = 'batter-to-second.png';

              basesArray[2] = this.state.runnersOnBase[1];
              basesColumnArray[2] = this.state.runnersOnBaseColumn[1];

              basesArray[1] = this.state.runnersOnBase[0];
              basesColumnArray[1] = this.state.runnersOnBaseColumn[0];
            }
        }
        else {
          // runner on 1st only
          newHArray[this.state.runnersOnBase[0]].cell[this.state.runnersOnBaseColumn[0]].bgImage = 'batter-to-second.png';

          basesArray[1] = this.state.runnersOnBase[0];
          basesColumnArray[1] = this.state.runnersOnBaseColumn[0];
        }
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
        show_bb_modal: false
      }
    });
  }
}

export default handleClick_bb;