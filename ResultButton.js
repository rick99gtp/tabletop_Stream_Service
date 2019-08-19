import React from 'react';

function ResultButton(props) {

    return(
        <div className={props.thisClassName}>
            {props.name}
        </div>
    );
}

export default ResultButton;