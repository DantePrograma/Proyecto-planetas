import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Earth } from "./pages/Earth/Earth";
import { SolarSystem } from "./components/SolarSystem";
import { Mercury } from "./pages/Mercury/Mercury";
import { Jupiter } from "./pages/Jupiter/Jupiter";
import { Mars } from "./pages/Mars/Mars";
import { Neptune } from "./pages/Neptune/Neptune";
import { Saturn } from "./pages/Saturn/Saturn";
import { Uranus } from "./pages/Uranus/Uranus";
import { Venus } from "./pages/Venus/Venus";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<SolarSystem />} />
        <Route path="Earth" element={<Earth />} />
        <Route path="Mercury" element={<Mercury />} />
        <Route path="Jupiter" element={<Jupiter />} />
        <Route path="Mars" element={<Mars />} />
        <Route path="Neptune" element={<Neptune />} />
        <Route path="Saturn" element={<Saturn />} />
        <Route path="Uranus" element={<Uranus />} />
        <Route path="Venus" element={<Venus />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
