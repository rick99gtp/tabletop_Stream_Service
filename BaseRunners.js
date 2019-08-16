import React from 'react';
import BaseImage from './BaseImage';

function BaseRunners(props) {

    var totalRunners = props.runnerOn1st + props.runnerOn2nd + props.runnerOn3rd;

    return (
        <BaseImage runners={totalRunners} />
    );
}

export default BaseRunners;