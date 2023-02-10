import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';

import { Layout } from './components/ui/layout';
import { MainPageLayout } from './components/ui/main-page-layout';
import { BookPage } from './pages/book';
import { MainPage } from './pages/main';
import { TermsOfUse } from './pages/terms-of-use';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route element={<MainPageLayout />} >
            <Route path='/' element={<Navigate to='books/all' />} />
            <Route path='books' element={<Navigate to='/' />} />
            <Route path='books/:category' element={<MainPage />} />
            <Route path='terms' element={<TermsOfUse contentView='terms' />} />
            <Route path='contract' element={<TermsOfUse contentView='contract' />} />
          </Route>
          <Route path='books/:category/:bookId' element={<BookPage />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
