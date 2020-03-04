import React from "react";
import Split from "./composition/Split";
import "./App.css";
import Tooltip from "./composition/Tooltip";
import TheDate from "./TheDate";
import Counter from "./Counter";
import Bomb from "./state-drills/Bomb";
import RouletteGun from "./state-drills/RouletteGun";

function App() {
  return <RouletteGun bulletInChamber='8' />;
}

export default App;
