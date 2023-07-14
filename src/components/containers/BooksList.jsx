import BookItem from '../BookItem';

const BooksList = () => {
  const books = [
    {
      id: 1,
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      category: 'Action',
      chapter: 'Chapter 17',
      percentage: 64,
    },
    {
      id: 2,
      title: 'Dune',
      category: 'Science Fiction',
      author: 'Frank Herbert',
      chapter: 'Chapter 3: A Lesson Learned',
      percentage: 8,
    },
    {
      id: 3,
      title: 'Capital in 20th Century',
      author: 'Suzanne Collins',
      category: 'Economy',
      chapter: 'Introduction',
      percentage: 0,
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
