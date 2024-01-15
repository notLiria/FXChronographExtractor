// <reference path="path/types.d.ts" />

import "./App.css";
import FPSExtractor from "./FpsExtractor";

const App = () => {
  return (
    <div id="app" className="app">
      <h3>FX Chronograph Data Dump</h3>
      <FPSExtractor />
    </div>
  );
};

export default App;
