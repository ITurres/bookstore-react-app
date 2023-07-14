import { React } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import BooksList from './components/containers/BooksList';
import CategoriesList from './components/containers/CategoriesList';

const App = () => {
  <>
    <Header />
    <Routes>
      <Route path="/" element={<BooksList />} />
      <Route path="/categories" element={<CategoriesList />} />
    </Routes>
  </>;
};

export default App;
