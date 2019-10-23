const handleClick_SB_CloseModal = function() {
    this.setState({
        show_sb_modal: false,
        highlight_sb1: false,
        highlight_sb2: false,
        highlight_sb3: false,
        steal_btn_active: false
    });
}

export default handleClick_SB_CloseModal;