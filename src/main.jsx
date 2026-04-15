import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import GlobalStyles from './components/GlobalStyles';
import HomePage from './pages/HomePage';
import KontaktPage from './pages/KontaktPage';
import UteomraderPage from './pages/UteomraderPage';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/kontakt" element={<KontaktPage />} />
          <Route path="/drift-vedlikehold-uteomrader" element={<UteomraderPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
);
