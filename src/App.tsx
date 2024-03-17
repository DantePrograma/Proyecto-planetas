import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Earth } from "./pages/Earth";
import { SolarSystem } from "./components/SolarSystem";
import { Mercury } from "./pages/Mercury";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<SolarSystem />} />
        <Route path="Earth" element={<Earth />} />
        <Route path="Mercury" element={<Mercury />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
