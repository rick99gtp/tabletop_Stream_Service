import React from 'react';
import MenuRow from './MenuRow';

function MenuPanel(props) {

    var menupanel = {
        display: "grid",
        gridTemplateColumns: "1fr",
        gridTemplateRows: "1fr 1fr 1fr 1fr"
    };

    return (
        <div style={menupanel}>
            <MenuRow name1="V-Bullpen" name2="H-Bullpen" />
            <MenuRow name1="V-Bench" name2="H-Bench" />
            <MenuRow name1="V-Bullpen" name2="Placeholder"/>
            <MenuRow name1="Settings" name2="Exit Game"/>
        </div>
    );
}

export default MenuPanel;