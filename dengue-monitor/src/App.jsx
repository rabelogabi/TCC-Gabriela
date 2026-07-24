import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Panorama from "./pages/Panorama";
import Dashboard from "./pages/Dashboard";
import Mapas from "./pages/Mapas";
import Dados from "./pages/Dashboard";
import Sobre from "./pages/Sobre";

import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/panorama" element={<Panorama />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/mapas" element={<Mapas />} />
        <Route path="/dados" element={<Dados />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </>
  );
}

export default App;