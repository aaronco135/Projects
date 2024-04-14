import React from 'react';
import { Link } from 'react-router-dom';

function MenuPage() {
  return (
    <div style={menuStyle}>
      <h2 style={headingStyle}>Welcome to my store !</h2>
      <Link to="/customers" style={linkStyle}>
        Customers Page
      </Link>{' '}
      <br />
      <Link to="/products" style={linkStyle}>
        Products Page
      </Link>{' '}
      <br />
      <Link to="/purchases" style={linkStyle}>
        Purchases Page
      </Link>
      <br />
    </div>
  );
}

const menuStyle = {
  border: '2px solid gray',
  margin: '20px',
  padding: '20px',
  backgroundColor: '#1f1f1f', // Fond sombre
  color: 'white', // Texte en blanc
  textAlign: 'center', // Centrer le contenu
  borderRadius: '10px', // Coins arrondis
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', // Ombre légère
  transition: 'transform 0.3s ease-in-out', // Animation de transformation
  cursor: 'pointer',
};

const headingStyle = {
  marginBottom: '20px',
};

const linkStyle = {
  color: 'red',
  textDecoration: 'none',
  fontSize: '18px',
  display: 'block', // Afficher les liens comme des blocs
  margin: '15px 0', // Marge entre les liens
  transition: 'color 0.3s ease-in-out', // Animation de changement de couleur
};

export default MenuPage;
