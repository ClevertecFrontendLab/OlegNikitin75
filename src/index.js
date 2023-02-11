import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/main';
import './index.css';
import { Layout } from './components/layout/layout';
import { Terms } from './pages/terms/terms';
import { LayoutMainPage } from './components/layout-main-page/layout-main-page';
import { ProfilePage } from './pages/profile/profile-page';
import { BookPage } from './pages/book';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route element={<LayoutMainPage />}>
            <Route path='/' element={<Navigate to='/books/all' />} />
            <Route path='/books/:category' element={<MainPage />} />
            <Route path='/terms' element={<Terms title='Правила пользования' />} />
            <Route path='/contract' element={<Terms title='Договор оферты' />} />
          </Route>
          <Route path='/books/:category/:bookId' element={<BookPage />} />
          <Route path='/profile' element={<ProfilePage />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
