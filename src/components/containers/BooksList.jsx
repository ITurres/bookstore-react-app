import BookItem from '../BookItem';

const BooksList = () => {
  const books = [
    {
      id: 1,
      title: 'The Hunger Games',
      category: 'Action',
      chapter: 'Chapter 17',
      percentage: '64',
    },
  ];

  return (
    <div className="container p-2">
      {books.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BooksList;
