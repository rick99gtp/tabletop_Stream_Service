import React from 'react';
import VisInningIndicator from './VisInningIndicator';
import InningCounter from './InningCounter';
import HomeInningIndicator from './HomeInningIndicator';

class InningIndicator extends React.Component {
    render() {

        var inningIndicator = {
            display: "flex",
            flexDirection: "column",
            gridColumn: 1,
            gridRow: "1/5",
            justifyContent: "space-around",
            alignItems: "center",
            border: "1px solid #000"
        };

        return (
            <div style={inningIndicator}>
                <VisInningIndicator teamBatting={this.props.indicator} />
                <InningCounter curInning={this.props.inning} />
                <HomeInningIndicator teamBatting={this.props.indicator} />
            </div>
        );
    }
}

export default InningIndicator;