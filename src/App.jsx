import { NightModeProvider } from "./NightModeContext.jsx";
import AverageCalculator from "./AverageCalculator";
import AverageCalculatorDaynamic from "./AverageCalculatorDaynamic";
import Average3Digit from "./Average3Digit.jsx";
import Average4Digit from "./Average4Digit.jsx";
import Two100One50 from "./Two100One50.jsx";
import Two100Two50 from "./Two100Two50.jsx";

function App() {
  return (
    <NightModeProvider>
      <AverageCalculator />
      <Average3Digit/>
      <Two100One50/>
      <Two100Two50/>
      <Average4Digit/>
      <AverageCalculatorDaynamic />
    </NightModeProvider>
  );
}

export default App;
