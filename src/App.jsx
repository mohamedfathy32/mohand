import { NightModeProvider } from "./NightModeContext.jsx";
import AverageCalculator from "./AverageCalculator";
import AverageCalculatorDaynamic from "./AverageCalculatorDaynamic";
import Average3Digit from "./Average3Digit.jsx";
import Average4Digit from "./Average4Digit.jsx";

function App() {
  return (
    <NightModeProvider>
      <AverageCalculator />
      <Average4Digit/>
      <Average3Digit/>
      <AverageCalculatorDaynamic />
    </NightModeProvider>
  );
}

export default App;
