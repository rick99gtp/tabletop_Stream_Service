import React from 'react';

function MiniCount(props) {
    var countStyle = {
        fontSize: "14px"
    };

    return (
        <div style={countStyle}>
            {props.count}
        </div>
    )
}

export default MiniCount;