const handleClick_1b_stay_at_third = function() {

  this.setState(prevState => {

      return {
          highlight_1b_stay_at_third: false,
          highlight_1b_scores: true,
          highlight_1b_out_at_home: false
      }
  });
}

export default handleClick_1b_stay_at_third;