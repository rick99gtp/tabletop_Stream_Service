import React from 'react';
import MiniTeamName from './MiniTeamName';
import MiniTeamRuns from './MiniTeamRuns';

class VMiniTeamName extends React.Component {
    render() {
        var miniTeamScore = {
            display: "flex",
            gridColumn: "2/5",
            gridRow: 2,
            border: "1px solid #000",
            justifyContent: "space-between"
        };

        return (
            <div style={miniTeamScore}>
                <MiniTeamName name={this.props.teamname} />
            </div>
        );
    };
}

export default VMiniTeamScore;