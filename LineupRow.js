import React from 'react';

function LineupRow(props) {

    var lineupStyle = {
        display: "flex",
        fontSize: "14px"
    };

    return (
        <div>
            <div style={lineupStyle}>
                <div>
                    {props.lineupNum}
                </div>
                <div>
                    {props.name}
                </div>
                <div>
                    {props.pos}
                </div>
            </div>
        </div>
    );
}

export default LineupRow;