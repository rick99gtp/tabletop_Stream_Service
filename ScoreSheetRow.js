import React from 'react';

function ScoreSheetRow(props) {
    
    var sheetRowStyle = {
        display: "grid",
        gridTemplateColumns: "repeat(18, 1fr)",
        gridTemplateRows: "1fr"
    };
    
    var imgCenter = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid #ccc"
    };

    return (
        <div style={sheetRowStyle}>
            <div style={imgCenter}>
                <img src="result-empty.jpg" alt="fff" />
            </div>
            <div style={imgCenter}>
                <img src="result-empty.jpg" alt="fff" />
            </div>
            <div style={imgCenter}>
                <img src="result-empty.jpg" alt="fff" />
            </div>
            <div style={imgCenter}>
                <img src="result-empty.jpg" alt="fff" />
            </div>
            <div style={imgCenter}>
                <img src="result-empty.jpg" alt="fff" />
            </div>
            <div style={imgCenter}>
                <img src="result-empty.jpg" alt="fff" />
            </div>
            <div style={imgCenter}>
                <img src="result-empty.jpg" alt="fff" />
            </div>
            <div style={imgCenter}>
                <img src="result-empty.jpg" alt="fff" />
            </div>
            <div style={imgCenter}>
                <img src="result-empty.jpg" alt="fff" />
            </div>
            <div style={imgCenter}>
                <img src="result-empty.jpg" alt="fff" />
            </div>
            <div style={imgCenter}>
                <img src="result-empty.jpg" alt="fff" />
            </div>
            <div style={imgCenter}>
                <img src="result-empty.jpg" alt="fff" />
            </div>
            <div style={imgCenter}>
                <img src="result-empty.jpg" alt="fff" />
            </div>
            <div style={imgCenter}>
                <img src="result-empty.jpg" alt="fff" />
            </div>
            <div style={imgCenter}>
                <img src="result-empty.jpg" alt="fff" />
            </div>
            <div style={imgCenter}>
                <img src="result-empty.jpg" alt="fff" />
            </div>
            <div style={imgCenter}>
                <img src="result-empty.jpg" alt="fff" />
            </div>
            <div style={imgCenter}>
                <img src="result-empty.jpg" alt="fff" />
            </div>
        </div>
        
    );
}

export default ScoreSheetRow;