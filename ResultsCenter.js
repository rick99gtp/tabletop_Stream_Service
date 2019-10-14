import React from 'react';
import ResultButton from './ResultButton';

function ResultsCenter(props) {

    const rcStyle = {
        display: "grid",
        gridTemplateColumns: "repeat(9, 1fr)",
        gridTemplateRows: "1fr 1fr",
        fontSize: "20px"
    };

    return (
        <div style={rcStyle}>
            <ResultButton name="1B" thisClassName="btn btn-green"/>
            <ResultButton name="2B" thisClassName="btn btn-green"/>
            <ResultButton name="3B" thisClassName="btn btn-green"/>
            <ResultButton name="HR" thisClassName="btn btn-green"/>
            <ResultButton name="BB" thisClassName="btn btn-green" btn_clicked={props.btn_bb}/>
            <ResultButton name="HBP" thisClassName="btn btn-green" btn_clicked={props.btn_hbp}/>
            <ResultButton name="SB" thisClassName="btn btn-green"/>
            <ResultButton name="E" thisClassName="btn btn-green"/>
            <ResultButton name="Undo" thisClassName="btn btn-orange"/>
            <ResultButton name="GB" thisClassName="btn btn-red"/>
            <ResultButton name="FB" thisClassName="btn btn-red"/>
            <ResultButton name="LD" thisClassName="btn btn-red"/>
            <ResultButton name="POP" thisClassName="btn btn-red"/>
            <ResultButton btn_clicked={props.btn_k} name="K" thisClassName="btn btn-red"/>
            <ResultButton name="WP" thisClassName="btn btn-red"/>
            <ResultButton name="CS" thisClassName="btn btn-red"/>
            <ResultButton name="PB" thisClassName="btn btn-red"/>
            <ResultButton name="Options" thisClassName="btn btn-orange"/>
        </div>
    );
}

export default ResultsCenter;