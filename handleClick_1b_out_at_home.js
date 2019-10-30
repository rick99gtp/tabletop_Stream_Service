const handleClick_1b_out_at_home = function() {

    this.setState(prevState => {

        return {
            highlight_1b_stay_at_third: false,
            highlight_1b_scores: false,
            highlight_1b_out_at_home: true
        }
    });
}

export default handleClick_1b_out_at_home;