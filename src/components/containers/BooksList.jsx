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

  if (isLoading) return <div className="container p-2">Loading...</div>;

  if (error) return <div className="container p-2">{error}</div>;

  if (!books || Object.keys(books).length === 0) {
    return <div className="container p-2">No books available.</div>;
  }

  return (
    <div className="container p-2">
      {Object.entries(books).map(([key, bookData]) => (
        bookData.map((book) => (
          <BookItem key={key} book={book} itemId={key} />
        ))
      ))}
    </div>
  );
};
export default BooksList;
