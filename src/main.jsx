import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import GlobalStyles from './components/GlobalStyles';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import TjenesterPage from './pages/TjenesterPage';
import ServicePage from './pages/ServicePage';
import HubPage, { hubs } from './pages/HubPage';
import OmOssPage from './pages/OmOssPage';
import ReferanserPage from './pages/ReferanserPage';
import KontaktPage from './pages/KontaktPage';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <GlobalStyles />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privat" element={<HubPage config={hubs.privat} />} />
          <Route path="/bedrift" element={<HubPage config={hubs.bedrift} />} />
          <Route path="/tjenester" element={<TjenesterPage />} />
          <Route path="/tjenester/:slug" element={<ServicePage />} />
          <Route path="/om-oss" element={<OmOssPage />} />
          <Route path="/referanser" element={<ReferanserPage />} />
          <Route path="/kontakt" element={<KontaktPage />} />
          {/* Gamle URLer */}
          <Route path="/drift-vedlikehold-uteomrader" element={<Navigate to="/tjenester/uteomrader" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
);
