import React from 'react';

function MiniTeamName(props) {

    var nameStyle = {
        fontSize: "14px"
    };

    return (
        <div style={nameStyle}>
            {props.name}
        </div>
    );
}

export default MiniTeamName;