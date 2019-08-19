import React from 'react';

function ScoreboardHeader() {
    
    var headerStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ccc"
    };

    return (
        <React.Fragment>
            <div style={headerStyle}>1</div>
            <div style={headerStyle}>2</div>
            <div style={headerStyle}>3</div>
            <div style={headerStyle}>4</div>
            <div style={headerStyle}>5</div>
            <div style={headerStyle}>6</div>
            <div style={headerStyle}>7</div>
            <div style={headerStyle}>8</div>
            <div style={headerStyle}>9</div>
            <div style={headerStyle}>10</div>
            <div style={headerStyle}>11</div>
            <div style={headerStyle}>12</div>
            <div style={headerStyle}>13</div>
            <div style={headerStyle}>14</div>
            <div style={headerStyle}>15</div>
            <div style={headerStyle}>R</div>
            <div style={headerStyle}>H</div>
            <div style={headerStyle}>E</div>
        </React.Fragment>
    );
}

export default ScoreboardHeader;