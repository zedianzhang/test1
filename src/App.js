import SummaryPage from "./page/SummaryPage";
import SingleSimulationpage from "./page/SingleSimulationpage";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
      // <Routes>
      //   <Route path="/" element={<SummaryPage/>}/>
      //   <Route path="Single-Simulation" 
      //           element={<SingleSimulationpage/>}/>
      // </Routes>
    
      <SummaryPage/>
  );
}

export default App;
