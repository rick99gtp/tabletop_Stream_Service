import React from 'react';
import VisInningIndicator from './VisInningIndicator';
import InningCounter from './InningCounter';
import HomeInningIndicator from './HomeInningIndicator';

function InningIndicator(props) {

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
            <VisInningIndicator teamBatting={props.indicator} />
            <InningCounter curInning={props.inning} />
            <HomeInningIndicator teamBatting={props.indicator} />
        </div>
    );
}

export default InningIndicator;