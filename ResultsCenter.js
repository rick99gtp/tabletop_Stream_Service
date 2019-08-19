import React from 'react';
import ResultButton from './ResultButton';

class ResultsCenter extends React.Component {

    render() {
        const rcStyle = {
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gridTemplateRows: "1fr 1fr",
            fontSize: "20px"
        };

        return (
            <div style={rcStyle}>
                <ResultButton name="Groundball" thisClassName="btn-red"/>
                <ResultButton name="Line Drive" thisClassName="btn-red"/>
                <ResultButton name="E" thisClassName="btn-green"/>
                <ResultButton name="Passed Ball" thisClassName="btn-green"/>
                <ResultButton name="Wild Pitch" thisClassName="btn-green"/>
                <ResultButton name="Stolen Base" thisClassName="btn-green"/>
                <ResultButton name="Flyball" thisClassName="btn-red"/>
                <ResultButton name="Popup" thisClassName="btn-red"/>
                <ResultButton name="Line Drive" thisClassName="btn-red"/>
                <ResultButton name="Popup" thisClassName="btn-red"/>
                <ResultButton name="Error" thisClassName="btn-green"/>
                <ResultButton name="Caught Stealing" thisClassName="btn-red"/>
            </div>
        );
    }
}

export default ResultsCenter;