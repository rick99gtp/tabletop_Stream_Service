import React from 'react';

function HomeInningIndicator(props) {

    var emptyDiv = {
        visibility: "hidden"
    };

    if(props.teamBatting === 1) {
        return (
            <div>
                -
            </div>
        );
    } else {
        return (
            <div style={emptyDiv}>
                -
            </div>
        );
    }
}

export default HomeInningIndicator;