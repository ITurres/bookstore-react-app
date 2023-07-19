import { useSelector } from 'react-redux';
import BookItem from '../BookItem';

const BooksList = () => {
  const books = useSelector((state) => state.books.books);

  return (
    <div className="container p-2">
      {books.map((book) => (
        <BookItem key={book.item_id} book={book} />
      ))}
    </div>
  );
};

export default BooksList;
