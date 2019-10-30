const handleClick_1b_cancel_button = function() {
    this.setState({
        show_1b_modal: false,
        highlight_1b_stay_at_second: true,
        highlight_1b_advance_to_third: false,
        highlight_1b_out_at_third: false,
        highlight_1b_stay_at_third: true,
        highlight_1b_scores: false,
        highlight_1b_out_at_home: false
    });
}

export default handleClick_1b_cancel_button;