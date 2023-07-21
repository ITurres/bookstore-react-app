import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import PercentageRing from './utils/PercentageRing';
import bookStoreAPI from '../services/bookStoreAPI';

const BookItem = ({ book }) => {
  const totalPages = Math.floor(Math.random() * 901) + 100;
  const currentPage = Math.floor(Math.random() * (totalPages + 1));
  const percentageRead = Math.round((currentPage / totalPages) * 100);

  const dispatch = useDispatch();

  return (
    <div className="book-item">
      <div className="book-item__info">
        <span className="book-item__category">{book.category}</span>
        <h2 className="book-item__title">{book.title}</h2>
        <span className="book-item__author">{book.author}</span>
        <div className="book-item__actions d-flex mt-3">
          <div className="button-wrapper">
            <button
              type="button"
              className="btn btn-link comments text-decoration-none"
            >
              Comments
            </button>
          </div>
          <div className="button-wrapper">
            <button
              type="button"
              className="btn btn-link text-decoration-none"
              onClick={() => dispatch(bookStoreAPI.deleteBookById(book.item_id))}
            >
              Remove
            </button>
          </div>
          <div>
            <button type="button" className="btn btn-link text-decoration-none">
              Edit
            </button>
          </div>
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
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookItem;
