const handleClick_sb2 = function() {

  this.setState(prevState => {
    if(!prevState.highlight_sb2) {
      // if runner on 3rd, he has to steal if he is not stealing
      if(prevState.runnersOnBase[2] !==99) {
        // runners on 2nd and 3rd
        return {
          highlight_sb2: true,
          highlight_sb3: true,
          steal_btn_active: true
        }
      }
      // no runner on 3rd
      else {
        return {
          highlight_sb2: true,
          steal_btn_active: true
        }
      }
    }
    // stealing 2nd already highlighted, if other runners leave steal_btn_active enabled
    else if(prevState.highlight_sb1) {
      return null;
    }
    else {
      return {
        highlight_sb2: false,
        steal_btn_active: false
      }
    }
  });
}

export default handleClick_sb2;