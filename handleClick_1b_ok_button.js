const handleClick_1b_ok_button = function() {

    let newVArray = [...this.state.vPlayerScoreSheetCell];
    let newHArray = [...this.state.hPlayerScoreSheetCell];
    let basesArray = [...this.state.runnersOnBase];
    let basesColumnArray = [...this.state.runnersOnBaseColumn];
    let newVBatter = 0;
    let newHBatter = 0;
    let newVColumn = 0;
    let newHColumn = 0;

    // console.log(this.state);

    if(this.state.teamBatting === 0) {

        newVArray[this.state.vBatter].cell[this.state.vColumn].firstbasetext = '1B';
  
        this.setState(prevState => {

            // set current row to normal
            if(prevState.vBatter === 8) {
                newVArray[this.state.vBatter].cell[this.state.vColumn].basesbgcolor = "transparent";
                newVArray[0].cell[prevState.vColumn + 1].basesbgcolor = "#fdf1d4";

                newVBatter = 0;
                newVColumn = prevState.vColumn + 1;
            }
            else { // set next row to transparent
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

            if(this.state.runnersOnBase[1] !== 99) {
                // if runner on 2nd stays at third
                if(this.state.highlight_1b_stay_at_third) {
                    newVArray[this.state.runnersOnBase[1]].cell[this.state.runnersOnBaseColumn[1]].bgImage = 'batter-to-third.png';

                    basesArray[2] = this.state.runnersOnBase[1];
                    basesColumnArray[2] = this.state.runnersOnBaseColumn[1];

                    basesArray[1] = 99;
                    basesColumnArray[1] = 0;
                }

                // if runner on 2nd scores
                if(this.state.highlight_1b_scores) {
                    newVArray[this.state.runnersOnBase[1]].cell[this.state.runnersOnBaseColumn[1]].bgImage = 'batter-to-home.png';
            
                    basesArray[1] = 99;
                    basesColumnArray[1] = 0;
                }

                // if runner on 2nd is out at home
                if(this.state.highlight_1b_out_at_home) {
                    newVArray[this.state.runnersOnBase[1]].cell[this.state.runnersOnBaseColumn[1]].bgImage = 'batter-out-at-home.png';
            
                    basesArray[1] = 99;
                    basesColumnArray[1] = 0;
                }
            }

            // if runner on 1st advances to third
            if(this.state.highlight_1b_advance_to_third) {
                newVArray[this.state.runnersOnBase[0]].cell[this.state.runnersOnBaseColumn[0]].bgImage = 'batter-to-third.png';
        
                basesArray[2] = this.state.runnersOnBase[0];
                basesColumnArray[2] = this.state.runnersOnBaseColumn[0];
            }

            // if runner on 1st is thrown out at third
            if(this.state.highlight_1b_out_at_third) {
                newVArray[this.state.runnersOnBase[0]].cell[this.state.runnersOnBaseColumn[0]].bgImage = 'batter-out-at-third.png';
            }

            // if runner on 1st stays at 2nd
            if(this.state.highlight_1b_stay_at_second) {
                console.log(this.state);
                newVArray[this.state.runnersOnBase[0]].cell[this.state.runnersOnBaseColumn[0]].bgImage = 'batter-to-second.png';

                basesArray[1] = this.state.runnersOnBase[0];
                basesColumnArray[1] = this.state.runnersOnBaseColumn[0];
            }

            // advance batter to 1st
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
              highlight_1b_stay_at_second: true,
              highlight_1b_advance_to_third: false,
              highlight_1b_out_at_third: false,
              highlight_1b_stay_at_third: true,
              highlight_1b_scores: false,
              highlight_1b_out_at_home: false
            }
        });
    }    
    
}

export default handleClick_1b_ok_button;