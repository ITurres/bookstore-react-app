import { Link } from 'react-router-dom';
import logo from '../assets/media/boookstore-logo.png';

const Navbar = () => (
  <nav className="navbar container p-2">
    <img src={logo} width="90" height="90" alt="bookstore logo" />
    <ul className="d-flex list-unstyled mb-0">
      <li className="list-inline-item navbar__item">
        <Link to="/">Books</Link>
      </li>
      <li className="list-inline-item navbar__item">
        <Link to="/categories">Categories</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
