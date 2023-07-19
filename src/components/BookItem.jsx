import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import PercentageRing from './utils/PercentageRing';
import bookStoreAPI from '../services/bookStoreAPI';

const BookItem = ({ book, itemId }) => {
  const totalPages = Math.floor(Math.random() * 901) + 100;
  const currentPage = Math.floor(Math.random() * (totalPages + 1));
  const percentageRead = Math.round((currentPage / totalPages) * 100);

  const dispatch = useDispatch();

  return (
    <div className="book-item">
      <div className="book-item__info">
        <span>{book.category}</span>
        <h2>{book.title}</h2>
        <span>{book.author}</span>
        <div className="book-item__actions">
          <button type="button" className="btn btn-link text-decoration-none">
            Comments
          </button>
          <button
            type="button"
            className="btn btn-link text-decoration-none"
            onClick={() => dispatch(bookStoreAPI.deleteBookById(itemId))}
          >
            Remove
          </button>
          <button type="button" className="btn btn-link text-decoration-none">
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
        <button type="button" className="btn btn-primary">
          UPDATE PROGRESS
        </button>
      </div>
    </div>
  );
};

BookItem.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  itemId: PropTypes.string.isRequired,
};

export default BookItem;
