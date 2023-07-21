import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/media/boookstore-logo.png';

const Navbar = () => (
  <nav className="navbar p-2">
    <div className="container">
      <div className="d-flex align-items-center">
        <img src={logo} width="90" height="90" alt="bookstore logo" />
        <h1 className="logo-title m-2">Bookstore CMS</h1>
        <ul className="navbar-items list-unstyled mb-0 m-2">
          <li className="list-inline-item navbar__item">
            <Link to="/">Books</Link>
          </li>
          <li className="list-inline-item navbar__item">
            <Link to="/categories">Categories</Link>
          </li>
        </ul>
      </div>
      <span className="login-icon">
        <FontAwesomeIcon icon={faUser} />
      </span>
    </div>
  </nav>
);

export default Navbar;
