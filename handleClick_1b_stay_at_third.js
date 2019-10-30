const handleClick_1b_stay_at_third = function() {

    this.setState(prevState => {
        let stay_at_second = this.state.highlight_1b_stay_at_second;
        let advance_to_third = false;
        let out_at_third = false;

        if(this.state.highlight_1b_advance_to_third || this.state.highlight_1b_out_at_third) {
            stay_at_second = true;
            advance_to_third = false;
            out_at_third= false;
        }

        return {
            highlight_1b_stay_at_second: stay_at_second,
            highlight_1b_stay_at_third: true,
            highlight_1b_advance_to_third: advance_to_third,
            highlight_1b_out_at_third: out_at_third,
            highlight_1b_scores: false,
            highlight_1b_out_at_home: false
        }
    });
}

export default handleClick_1b_stay_at_third;