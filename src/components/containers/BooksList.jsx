import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import BookItem from '../BookItem';
import bookStoreAPI from '../../services/bookStoreAPI';

const BooksList = () => {
  const { books, isLoading, error } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(bookStoreAPI.getBooksList());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="error-container container p-2">
        <h2 className="error-message">Loading...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container container p-2">
        <h2 className="error-message">{error}</h2>
      </div>
    );
  }

  if (!books || Object.keys(books).length === 0) {
    return (
      <div className="error-container container p-2">
        <h2 className="error-message">No books available.</h2>
      </div>
    );
  }

  return (
    <section className="book-list-section">
      <div className="book-list container">
        {books.map((book) => (
          <BookItem key={book.item_id} book={book} />
        ))}
      </div>
    </section>
  );
};
export default BooksList;
