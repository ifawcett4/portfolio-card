import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Work from "./pages/Work";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ThreeScene from "./components/ThreeScene";
import Home from "./pages/Home";

function App() {
  const handleWorkClick = (event) => {
    if (window.location.pathname === "/work") {
      window.location.reload();
    }
  };

  return (
    <Router>
      <div className="app">
        <nav>
          <ul>
            <li>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/work" className="nav-link" onClick={handleWorkClick}>
                Work
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li>
              <Link
                to="https://www.pixelfishcreative.xyz/home"
                className="nav-link"
              >
                Pixel Fish
              </Link>
            </li>
          </ul>
        </nav>

        <ThreeScene />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
