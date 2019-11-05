const handleClick_gb1 = function() {
    let curStr = this.state.gb_result;
    let newStr = curStr.length > 0 ? '-1': '1';

    this.setState({
        gb_result: curStr.concat(newStr)
    });
}

export default handleClick_gb1;