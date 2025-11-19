import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-icon">🎓</div>
        <div>
          <div className="sidebar-title">Dr. Professeur</div>
          <div className="sidebar-subtitle">Enseignant-Chercheur</div>
        </div>
      </div>

      <nav className="sidebar-nav">
        <NavLink to="/" end className="nav-item">
          <span>🏠</span>
          <span>Accueil</span>
        </NavLink>
        <NavLink to="/recherche" className="nav-item">
          <span>📚</span>
          <span>Recherche</span>
        </NavLink>
        <NavLink to="/publications" className="nav-item">
          <span>📝</span>
          <span>Publications</span>
        </NavLink>
        <NavLink to="/enseignement" className="nav-item">
          <span>🎓</span>
          <span>Enseignement</span>
        </NavLink>
        <NavLink to="/ressources" className="nav-item">
          <span>📂</span>
          <span>Ressources</span>
        </NavLink>
        <NavLink to="/contact" className="nav-item">
          <span>✉️</span>
          <span>Contact</span>
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;
