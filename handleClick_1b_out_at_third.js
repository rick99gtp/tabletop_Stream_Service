const handleClick_1b_out_at_third = function() {
    this.setState(prevState => {
        let scores = this.state.highlight_1b_scores;
        let out_at_home = this.state.highlight_1b_out_at_home;

        if(this.state.highlight_1b_stay_at_third) {
            scores = true;
        }

        return {
            highlight_1b_out_at_third: true,
            highlight_1b_stay_at_second: false,
            highlight_1b_advance_to_third: false,
            highlight_1b_stay_at_third: false,
            highlight_1b_scores: scores,
            highlight_1b_out_at_home: out_at_home
        }
    });
}

export default handleClick_1b_out_at_third;