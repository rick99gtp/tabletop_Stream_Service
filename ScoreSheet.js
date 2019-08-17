import React from 'react';
import ScoreSheetRow from './ScoreSheetRow';

function ScoreSheet(props) {

    var sheetStyle = {
        display: "grid",
        gridTemplateColumns: "1fr",
        gridTemplateRows: "repeat(9, 1fr)",
        border: "1px solid #ccc"
    };

    return (
        <div style={sheetStyle}>
            <ScoreSheetRow />
            <ScoreSheetRow />
            <ScoreSheetRow />
            <ScoreSheetRow />
            <ScoreSheetRow />
            <ScoreSheetRow />
            <ScoreSheetRow />
            <ScoreSheetRow />
            <ScoreSheetRow />
        </div>
    );
}

export default ScoreSheet;