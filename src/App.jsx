import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import PlanetsPage from "./components/PlanetsPage";
import PlanetDetailPage from "./components/PlanetDetailPage";
import NavBar from "./Nav";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<PlanetsPage />} />
            <Route path="/planets/:planetName" element={<PlanetDetailPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
