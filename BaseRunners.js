import React from 'react';
import BaseImage from './BaseImage';

function BaseRunners(props) {

    var baseImageStyle = {
        width: "10%"
    };

    var totalRunners = props.runnerOn1st + props.runnerOn2nd + props.runnerOn3rd;

    return (
        <div style={baseImageStyle}>
            <BaseImage runners={totalRunners} />
        </div>
    );
}

export default BaseRunners;