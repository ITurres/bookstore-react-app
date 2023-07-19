import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/booksSlice';

const AddNewBookForm = () => {
  const dispatch = useDispatch();
  const bookTitle = useRef(null);
  const bookAuthor = useRef(null);

  const handleSubmit = () => {
    const dataEntry = /^\S.*$/;

    if (
      !dataEntry.test(bookTitle.current.value)
      || !dataEntry.test(bookAuthor.current.value)
    ) {
      return;
    }

    const newBookData = {
      item_id: crypto.randomUUID(),
      title: bookTitle.current.value,
      author: bookAuthor.current.value,
      category: '',
      totalPages: 100,
      currentPage: 0,
    };

    dispatch(addBook(newBookData));

    bookTitle.current.value = '';
    bookAuthor.current.value = '';
  };

  return (
    <div className="container p-2">
      <h2>Add New Book</h2>
      <form className="d-flex">
        <input
          type="text"
          placeholder="Book title"
          className="form-control"
          ref={bookTitle}
        />
        <input
          placeholder="Book Author"
          className="form-control"
          ref={bookAuthor}
        />
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Add book
        </button>
      </form>
    </div>
  );
};

export default AddNewBookForm;
