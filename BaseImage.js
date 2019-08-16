import React from 'react';

function BaseImage(props) {
    var imgSrc = "bases-" + props.runners + ".jpg";

    return (
        <div>
            <img src={imgSrc} alt="base-runners" />
        </div>
    );
}

export default BaseImage;