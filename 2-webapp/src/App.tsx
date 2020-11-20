import React from "react";
import { StationContainer } from "./containers/StationContainer";
import "./App.css";

function App() {
  return (
    <div id={"app"}>
      <div id={"header"}>
        <h1>Bike Stations in Oslo</h1>
      </div>
      <StationContainer />
    </div>
  );
}

export default App;
