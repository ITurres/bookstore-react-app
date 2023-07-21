import { Link } from 'react-router-dom';

const CategoriesList = () => (
  <div className="error-container container categories">
    <h2 className="error-message">
      Categories page is Under Construction. Please go back to
      &nbsp;
      <Link to="/">Books</Link>
      .
    </h2>
  </div>
);

export default CategoriesList;
