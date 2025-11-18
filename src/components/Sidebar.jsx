import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Mon Site</h2>

      <nav>
        <NavLink to="/">Accueil</NavLink><br/>
        <NavLink to="/recherche">Recherche</NavLink><br/>
        <NavLink to="/publications">Publications</NavLink><br/>
        <NavLink to="/enseignement">Enseignement</NavLink><br/>
        <NavLink to="/ressources">Ressources</NavLink><br/>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;
