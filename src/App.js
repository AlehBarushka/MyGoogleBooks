import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';

import BookItem from './components/BookItem';
import BooksList from './components/BooksList';
import Header from './components/Header';
import HomePage from './components/HomePage';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='books/list' element={<BooksList />} />
        <Route path='books/:id' element={<BookItem />} />
      </Routes>
    </>
  );
};

export default App;
