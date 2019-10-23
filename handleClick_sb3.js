const handleClick_sb3 = function() {

    this.setState(prevState => {
      if(prevState.highlight_sb2) {
        return null;
      }
      else if(prevState.highlight_sb1) {
        return {
          highlight_sb3: !prevState.highlight_sb3
        }
      }
      else {
        return {
          highlight_sb3: !prevState.highlight_sb3,
          steal_btn_active: !prevState.steal_btn_active
        }
      }
    });
  }
  export default handleClick_sb3;