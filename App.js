import React from 'react';
import TopPanel from './TopPanel';

import './App.css';

function App() {

  var appMain = {
    width: "100vw",
    height: "100vh",
    margin: "0",
    padding: "0",
    boxSizing: "border-box"
  };

  return (
    <div style={appMain}>
      <TopPanel />
    </div>
  );
}

export default App;
