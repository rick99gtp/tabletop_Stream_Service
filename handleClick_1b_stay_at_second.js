const handleClick_1b_stay_at_second = function() {

    this.setState(prevState => {

        return {
            highlight_1b_stay_at_second: true,
            highlight_1b_advance_to_third: false,
            highlight_1b_out_at_third: false
        }
    });
}

export default handleClick_1b_stay_at_second;