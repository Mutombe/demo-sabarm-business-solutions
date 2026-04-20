import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from 'sonner';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ErrorBoundary from './components/ErrorBoundary';

import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Industries from './pages/Industries';
import Team from './pages/Team';
import Insights from './pages/Insights';
import InsightDetail from './pages/InsightDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function ScrollReset() {
  const { pathname, search } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, search]);
  return null;
}

export default function App() {
  const location = useLocation();

  return (
    <>
      <ScrollReset />
      <Navbar />

      <main className="min-h-[60vh]">
        <ErrorBoundary>
          <AnimatePresence mode="popLayout" initial={false}>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:slug" element={<ServiceDetail />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/team" element={<Team />} />
              <Route path="/insights" element={<Insights />} />
              <Route path="/insights/:slug" element={<InsightDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </ErrorBoundary>
      </main>

      <Footer />
      <ScrollToTop />
      <Toaster
        position="top-center"
        theme="light"
        closeButton
        toastOptions={{
          style: {
            fontFamily: 'Inter, system-ui, sans-serif',
            borderRadius: '2px',
          },
        }}
      />
    </>
  );
}
