import React, { useRef } from 'react';

const AddNewBookForm = () => {
  const bookTitle = useRef(null);
  const bookAuthor = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = {
      item_id: crypto.randomUUID(),
      title: bookTitle.current.value,
      author: bookAuthor.current.value,
      chapter: 'Chapter #',
      percentage: 10,
    };
    // ! should do something else with `book`? ===> remove comment when ready
    return book;
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
        <input className="form-control" ref={bookAuthor} />
        <button
          type="submit"
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
