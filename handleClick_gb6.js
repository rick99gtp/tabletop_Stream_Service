const handleClick_gb6 = function() {
    let curStr = this.state.gb_result;
    let newStr = curStr.length > 0 ? '-6': '6';

    this.setState({
        gb_result: curStr.concat(newStr)
    });
}

export default handleClick_gb6;