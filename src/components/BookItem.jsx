import PropTypes from 'prop-types';
import PercentageRing from './utils/PercentageRing';

const BookItem = ({ book }) => {
  const percentageRead = Math.round((book.pagesRead / book.totalPages) * 100);

  return (
    <div className="book-item">
      <div className="book-item__info">
        <span>{book.category}</span>
        <h2>{book.title}</h2>
        <span>{book.author}</span>
        <div className="book-item__actions">
          <button
            id={book.item_id}
            type="button"
            className="btn btn-link text-decoration-none"
          >
            Comments
          </button>
          <button
            id={book.item_id}
            type="button"
            className="btn btn-link text-decoration-none"
          >
            Remove
          </button>
          <button
            id={book.item_id}
            type="button"
            className="btn btn-link text-decoration-none"
          >
            Edit
          </button>
        </div>
      </div>
      <div className="book-item__percentage">
        <PercentageRing percentage={percentageRead} />
      </div>
      <div className="book-item__chapter">
        <span>CURRENT CHAPTER</span>
        <h3>Unknown</h3>
        <button id={book.item_id} type="button" className="btn btn-primary">
          UPDATE PROGRESS
        </button>
      </div>
    </div>
  );
};

BookItem.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    totalPages: PropTypes.number.isRequired,
    pagesRead: PropTypes.number.isRequired,
  }).isRequired,
};

export default BookItem;
