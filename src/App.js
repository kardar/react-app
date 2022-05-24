import logo from "./logo.svg";
import "./App.css";
import Shop from "./components/Shop";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LeftNavBar from "./components/LeftNavBar";
import Header from "./components/Header";
import Catogries from "./components/Catogries";
import Fotter from "./components/Footer";
import ProductSlider from "./components/ProductSlider";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Router>
        <Home />
        <Routes>
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Fotter />
      </Router>
    </div>
  );
}

export default App;
