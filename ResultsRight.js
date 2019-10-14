import React from 'react';
import ResultButton from './ResultButton';

function ResultsRight(props) {

    const rlStyle = {
        display: "grid",
        gridTemplateColumns: "1fr",
        gridTemplateRows: "1fr 1fr",
        fontSize: "20px"
    };

    return (
        <div style={rlStyle}>
            <ResultButton name={props.pitcherName} throws={props.pitcherThrows} thisClassName="btn btn-blue pitcher-button"/>
            <div className="pitcher-stats">
                <div className="pitcher-stats-upper">
                    <div>IP</div>
                    <div>H</div>
                    <div>R</div>
                    <div>ER</div>
                    <div>BB</div>
                    <div>K</div>
                </div>
                <div className="pitcher-stats-lower">
                    <div>0</div>
                    <div>0</div>
                    <div>0</div>
                    <div>0</div>
                    <div>0</div>
                    <div>0</div>
                </div>
            </div>
        </div>
    );
}

export default ResultsRight;