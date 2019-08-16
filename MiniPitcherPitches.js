import React from 'react';

function MiniPitcherPitches(props) {
    
    var miniPitcherPitchesStyle = {
        fontSize: "14px",
    };

    return (
        <div style={miniPitcherPitchesStyle}>
            P. {props.pitches}
        </div>
    );
}

export default MiniPitcherPitches;