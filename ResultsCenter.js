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
            <ResultButton name="1B" thisClassName="btn btn-green" btn_clicked={props.btn_1b}/>
            <ResultButton name="2B" thisClassName="btn btn-green" btn_clicked={props.btn_2b}/>
            <ResultButton name="3B" thisClassName="btn btn-green" btn_clicked={props.btn_3b}/>
            <ResultButton name="HR" thisClassName="btn btn-green" btn_clicked={props.btn_hr}/>
            <ResultButton name="BB" thisClassName="btn btn-green" btn_clicked={props.btn_bb}/>
            <ResultButton name="HBP" thisClassName="btn btn-green" btn_clicked={props.btn_hbp}/>
            <ResultButton name="SB" thisClassName="btn btn-green" sb_btn="true" sb_active={props.btn_sb_active} btn_clicked={props.btn_sb}/>
            <ResultButton name="E" thisClassName="btn btn-green"/>
            <ResultButton name="Undo" thisClassName="btn btn-orange"/>
            <ResultButton name="GB" thisClassName="btn btn-red" btn_clicked={props.btn_gb}/>
            <ResultButton name="FB" thisClassName="btn btn-red"/>
            <ResultButton name="LD" thisClassName="btn btn-red" btn_clicked={props.btn_ld}/>
            <ResultButton name="POP" thisClassName="btn btn-red" btn_clicked={props.btn_pop}/>
            <ResultButton btn_clicked={props.btn_k} name="K" thisClassName="btn btn-red"/>
            <ResultButton name="WP" thisClassName="btn btn-red" wp_btn="true" wp_active={props.btn_wp_active} btn_clicked={props.btn_wp}/>
            <ResultButton name="CS" thisClassName="btn btn-red" cs_btn="true" cs_active={props.btn_cs_active} btn_clicked={props.btn_cs}/>
            <ResultButton name="PB" thisClassName="btn btn-red" pb_btn="true" pb_active={props.btn_pb_active} btn_clicked={props.btn_pb}/>
            <ResultButton name="Options" thisClassName="btn btn-orange"/>
        </div>
    );
}

export default ResultsCenter;