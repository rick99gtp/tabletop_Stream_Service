const handleClick_gb4 = function() {
    let curStr = this.state.gb_result;
    let newStr = curStr.length > 0 ? '-4': '4';

    this.setState({
        gb_result: curStr.concat(newStr)
    });
}

export default handleClick_gb4;