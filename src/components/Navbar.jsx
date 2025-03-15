import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="site-name">nonotes</Link>
      <ul className="nav-links">
        <li><Link to="/">home</Link></li>
        <li><Link to="/About">what is it?</Link></li>
        {/* <li><Link to="/Contact">contact</Link></li> */}
      </ul>
    </nav>
  );
}

export default Navbar;