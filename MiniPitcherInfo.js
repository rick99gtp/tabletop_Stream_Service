import React from 'react';
import MiniPitcherName from './MiniPitcherName';
import MiniPitcherPitches from './MiniPitcherPitches';

function MiniPitcherInfo(props) {

    var miniPitcherInfoStyle = {
        display: "flex",
        justifyContent: "space-between",
        gridColumn: "2/6",
        gridRow: 1,
        border: "1px solid #000"
    };

    if(props.indicator === 0) {
        return (
            <div style={miniPitcherInfoStyle}>
                <MiniPitcherName name={props.hPitcherName} />
                <MiniPitcherPitches pitches={props.hPitches} />
            </div>
        );
    }
    else {
        return (
            <div style={miniPitcherInfoStyle}>
                <MiniPitcherName name={props.vPitcherName} />
                <MiniPitcherPitches pitches={props.vPitches} />
            </div>
        );
    }
}

export default MiniPitcherInfo;