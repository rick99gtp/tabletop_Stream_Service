const handleClick_gb5 = function() {
    let curStr = this.state.gb_result;
    let newStr = curStr.length > 0 ? '-5': '5';

    this.setState({
        gb_result: curStr.concat(newStr)
    });
}

export default handleClick_gb5;