const handleClick_gb2 = function() {
    let curStr = this.state.gb_result;
    let newStr = curStr.length > 0 ? '-2': '2';

    this.setState({
        gb_result: curStr.concat(newStr)
    });
}

export default handleClick_gb2;