import React from 'react';
import ResultButton from './ResultButton';

class ResultsLeft extends React.Component {

    render() {
        const rlStyle = {
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "1fr 1fr",
            fontSize: "20px"
        };

        return (
            <div style={rlStyle}>
                <ResultButton name="Single" thisClassName="btn-green"/>
                <ResultButton name="Double" thisClassName="btn-green"/>
                <ResultButton name="Triple" thisClassName="btn-green"/>
                <ResultButton name="Homerun" thisClassName="btn-green"/>
            </div>
        );
    }
}

export default ResultsLeft;