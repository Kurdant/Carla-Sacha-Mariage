import './Footer.scss';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer__copy">
        &copy; {year} Carla &amp; Sacha — Tous droits réservés
      </p>
      <p className="footer__credit">
        Site réalisé par{' '}
        <a
          href="https://kurdant.fr"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__link"
        >
          Kurdant.fr
        </a>
      </p>
    </footer>
  );
};

export default Footer;
