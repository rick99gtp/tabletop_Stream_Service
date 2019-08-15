import React from 'react';

function VisInningIndicator(props) {
    
    var emptyDiv = {
        visibility: "hidden"
    };

    if(props.teamBatting === 0) {
        return (
            <div>
                +
            </div>
        );
    } else {
        return (
            <div style={emptyDiv}>
                +
            </div>
        )
    }
}

export default VisInningIndicator;