import React from "react";
import "./Footer.css"; // Importer le fichier CSS pour le footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerContainer">
        <div className="footerSection">
          <h4>Shopstor</h4>
          <p>&copy; 2024 Shopstor. Created by <a href="https://github.com/Sara-Derdak">Sara DERDAK</a>.</p>
        </div>

        <div className="footerSection">
          <h4>Liens utiles</h4>
          <ul>
            <li><a href="#">Politique de confidentialité</a></li>
            <li><a href="#">Conditions d'utilisation</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="footerSection">
          <h4>Suivez-nous</h4>
          <ul className="socialLinks">
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
