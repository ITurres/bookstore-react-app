import React, { useRef } from 'react';

const AddNewBookForm = () => {
  const bookTitle = useRef(null);
  const bookCategory = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = {
      item_id: crypto.randomUUID(),
      title: bookTitle.current.value,
      category: bookCategory.current.value,
      chapter: 'Chapter #',
      percentage: '10',
    };
    // ! should do something else with `book`? ===> remove comment when ready
    return book;
  };

  return (
    <div className="container p-2">
      <h2>Add New Book</h2>
      <form className="d-flex">
        <input type="text" placeholder="Book title" className="form-control" />
        <select>
          <option disabled selected>
            Category
          </option>
          {/* more options */}
        </select>
        <button type="submit" className="btn-primary" onClick={handleSubmit}>
          Add book
        </button>
      </form>
    </div>
  );
};

export default AddNewBookForm;
