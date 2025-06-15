import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./services/ThemeProvider";
import Home from "./pages/Home";

function App() {
  return (
    <div className="app">
      <ThemeProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
