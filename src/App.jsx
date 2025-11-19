import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Research from "./pages/Research";
import Publications from "./pages/Publications";
import Teaching from "./pages/Teaching";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="app-container">
      <Sidebar />

      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recherche" element={<Research />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/enseignement" element={<Teaching />} />
          <Route path="/ressources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
