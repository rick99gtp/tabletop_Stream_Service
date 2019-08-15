import React from 'react';

class InningCounter extends React.Component {
    render() {
        return (
            <div>
                {this.props.curInning}
            </div>
        );
    };
}

export default InningCounter;