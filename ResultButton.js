import React from 'react';

function ResultButton(props) {

    return(
        <div onClick={props.btn_clicked} className={props.thisClassName}>
            <div>{props.name}</div>
            <div>{props.throws}</div>
        </div>
    );
}

export default ResultButton;