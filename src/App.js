import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Work from "./pages/Work";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ThreeScene from "./components/ThreeScene";

function App() {
  return (
    <Router>
      <div className="app">
        <nav>
          <ul>
            <li>
              <Link to="/work" className="nav-link">
                Work
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<ThreeScene />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
