const handleClick_gb3 = function() {
    let curStr = this.state.gb_result;
    let newStr = curStr.length > 0 ? '-3': '3';

    this.setState({
        gb_result: curStr.concat(newStr)
    });
}

export default handleClick_gb3;