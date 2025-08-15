
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import StorePage from './components/StorePage';
import DonatePage from './components/DonatePage';
import WikiPage from './components/WikiPage';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#\//, '') || 'home';
      const validPages: Page[] = ['home', 'store', 'donate', 'wiki'];
      
      if (validPages.includes(hash as Page)) {
        setCurrentPage(hash as Page);
      } else {
        window.location.hash = '#/home';
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'store':
        return <StorePage />;
      case 'donate':
        return <DonatePage />;
      case 'wiki':
        return <WikiPage />;
      default:
        return <HomePage />;
    }
  };

  return (
      <div className="bg-slate-900 text-slate-200 min-h-screen font-sans">
        <Header currentPage={currentPage} />
        <main className="container mx-auto px-4 py-8">
          {renderPage()}
        </main>
      </div>
  );
};

export default App;
