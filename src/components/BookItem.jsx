import PropTypes from 'prop-types';
import PercentageRing from './utils/PercentageRing';

const BookItem = ({ book }) => (
  <div className="book-item">
    <div className="book-item__info">
      <span>{book.category}</span>
      <h2>{book.title}</h2>
      <span>Author</span>
      <div className="book-item__actions">
        <button
          id={book.id}
          type="button"
          className="btn btn-link text-decoration-none"
        >
          Comments
        </button>
        <button
          id={book.id}
          type="button"
          className="btn btn-link text-decoration-none"
        >
          Remove
        </button>
        <button
          id={book.id}
          type="button"
          className="btn btn-link text-decoration-none"
        >
          Edit
        </button>
      </div>
    </div>
    <div className="book-item__percentage">
      <PercentageRing percentage={book.percentage} />
    </div>
    <div className="book-item__chapter">
      <span>CURRENT CHAPTER</span>
      <h3>{book.chapter}</h3>
      <button id={book.id} type="button" className="btn btn-primary">
        UPDATE PROGRESS
      </button>
    </div>
  </div>
);

BookItem.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    chapter: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};

export default BookItem;
