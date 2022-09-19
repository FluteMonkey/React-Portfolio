import './App.scss';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from './components/sidebar';
import Home from "./components/pages/about";
import Contact from './components/pages/Contact';
import Work from './components/pages/work';

function App() {
  return (
    <Router>
    <div className="flex-column justify-flex-start min-100-vh">
      <Sidebar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

    </div>
  </Router>
  );
}

export default App;
