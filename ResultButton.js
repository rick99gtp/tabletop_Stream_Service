import React from 'react';

function ResultButton(props) {

    if(props.wp_btn) {
        if(props.wp_active) {
            return(
                <div onClick={props.btn_clicked} className="btn btn-red">
                    <div>{props.name}</div>
                    <div>{props.throws}</div>
                </div>
            );
        }
        else {
            return(
                <div onClick={props.btn_clicked} className="btn btn-red btn-red-disabled">
                    <div>{props.name}</div>
                    <div>{props.throws}</div>
                </div>
            );
        }
    }
    else if(props.pb_btn) {
        if(props.pb_active) {
            return(
                <div onClick={props.btn_clicked} className="btn btn-red">
                    <div>{props.name}</div>
                    <div>{props.throws}</div>
                </div>
            );
        }
        else {
            return(
                <div onClick={props.btn_clicked} className="btn btn-red btn-red-disabled">
                    <div>{props.name}</div>
                    <div>{props.throws}</div>
                </div>
            );
        }
    }
    else if(props.sb_btn) {
        if(props.sb_active) {
            return(
                <div onClick={props.btn_clicked} className="btn btn-green">
                    <div>{props.name}</div>
                    <div>{props.throws}</div>
                </div>
            );
        }
        else {
            return(
                <div onClick={props.btn_clicked} className="btn btn-green btn-green-disabled">
                    <div>{props.name}</div>
                    <div>{props.throws}</div>
                </div>
            );
        }
    }
    else if(props.cs_btn) {
        if(props.cs_active) {
            return(
                <div onClick={props.btn_clicked} className="btn btn-red">
                    <div>{props.name}</div>
                    <div>{props.throws}</div>
                </div>
            );
        }
        else {
            return(
                <div onClick={props.btn_clicked} className="btn btn-red btn-red-disabled">
                    <div>{props.name}</div>
                    <div>{props.throws}</div>
                </div>
            );
        }
    }
    else {
        return(
            <div onClick={props.btn_clicked} className={props.thisClassName}>
                <div>{props.name}</div>
                <div>{props.throws}</div>
            </div>
        );
    }
}

export default ResultButton;