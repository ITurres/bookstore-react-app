import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './styles/index.scss';
import App from './App';
import bookStore from './redux/store';
import reportWebVitals from './reportWebVitals';
import bookStoreAPI from './services/bookStoreAPI';

if (localStorage.length === 0) {
  bookStoreAPI.setBookStoreId();
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={bookStore}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);

reportWebVitals();
