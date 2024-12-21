import React from "react";
import { NightModeProvider } from "./NightModeContext.jsx";
import AverageCalculator from "./AverageCalculator";
import AverageCalculatorDaynamic from "./AverageCalculatorDaynamic";

function App() {
  return (
    <NightModeProvider>
      <AverageCalculator />
      <AverageCalculatorDaynamic />
    </NightModeProvider>
  );
}

export default App;
