import React from 'react';

function BaseImage(props) {

    var imgStyle = {
        width: "auto",
        maxHeight: "100%"
    };

    var imgSrc = "bases-" + props.runners + ".jpg";

    return (
        <div>
            <img style={imgStyle} src={imgSrc} alt="base-runners" />
        </div>
    );
}

export default BaseImage;