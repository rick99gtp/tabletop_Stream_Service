const handleClick_sb1 = function() {

  this.setState(prevState => {
    if(!prevState.highlight_sb1) {
      // if runner on 2nd, he has to steal if he is not stealing
      if(prevState.runnersOnBase[1] !==99) {
        // bases loaded, all runners have to steal
        if(prevState.runnersOnBase[2] !== 99) {
          return {
            highlight_sb1: true,
            highlight_sb2: true,
            highlight_sb3: true,
            steal_btn_active: true
          }
        }
        // runners on 1st and 2nd
        else {
          return {
            highlight_sb1: true,
            highlight_sb2: true,
            steal_btn_active: true
          }
        }
      }
      // no runner on 2nd
      else {
        return {
          highlight_sb1: true,
          steal_btn_active: true
        }
      }
    }
    // stealing 2nd already highlighted, if other runners leave steal_btn_active enabled
    else if(prevState.highlight_sb2 || prevState.highlight_sb3) {
      return {
        highlight_sb1: false
      }
    }
    else {
      return {
        highlight_sb1: false,
        steal_btn_active: false
      }
    }
  });
}
export default handleClick_sb1;