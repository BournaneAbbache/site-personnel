import profile from "../assets/profile.jpg";
import { FaLinkedin, FaTwitter, FaBook, FaEnvelope, FaDownload } from "react-icons/fa";

function Home() {
  return (
    <div className="hero-wrapper">
      <div className="hero-card">
        <div className="hero-left">
          <div className="hero-badge">Enseignant-Chercheur</div>

          <h1 className="hero-name">Bournane Abbache</h1>
          <div className="hero-role">Docteur en Informatique</div>

          <p className="hero-text">
            Spécialisé en Intelligence Artificielle et Apprentissage Automatique.
            Passionné par la recherche et l&apos;enseignement des technologies
            émergentes.
          </p>

          <div className="hero-actions">
            <button className="btn-primary">
              <FaEnvelope style={{ marginRight: "8px" }} />
              Me Contacter
            </button>

            <button className="btn-secondary">
              <FaDownload style={{ marginRight: "8px" }} />
              Télécharger CV
            </button>
          </div>

          <div className="hero-socials">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
            >
              <FaTwitter />
            </a>

            <a href="#publications" className="social-btn">
              <FaBook />
            </a>
          </div>

          <div className="hero-scroll">
            <span>Défiler</span>
            <div className="scroll-icon">
              <div className="scroll-dot" />
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-photo-layer" />
          <img
            src={profile}
            alt="Portrait du professeur"
            className="hero-photo"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
