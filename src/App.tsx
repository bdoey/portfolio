
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

const App: React.FC = () => {
  const [isArticleVisible, setArticleVisible] = useState(false);
  const [activeArticle, setActiveArticle] = useState<string | null>(null);
  const [isPreloading, setIsPreloading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsPreloading(false), 100);

    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash) {
        setActiveArticle(hash);
        setArticleVisible(true);
      } else {
        setArticleVisible(false);
        // Delay hiding the article to allow for outro animation
        setTimeout(() => setActiveArticle(null), 325);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial check

    return () => {
      clearTimeout(timer);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const bgClasses = `
    fixed top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat transition-all duration-500 ease-in-out
    ${isArticleVisible ? 'scale-105 blur-sm' : 'scale-100 blur-0'}
  `;

  return (
    <div className={`min-h-screen text-white font-light leading-relaxed ${isPreloading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}`}>
      <div 
        className={bgClasses} 
        style={{ backgroundImage: "url('https://raw.githubusercontent.com/bdoey/portfolio/refs/heads/main/black2-bg.jpeg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/50"></div>
      </div>

      <div className={`relative z-10 flex flex-col items-center justify-between min-h-screen p-4 sm:p-8 md:p-12 transition-opacity duration-300 ease-in-out ${isArticleVisible ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <div /> 
        <Header />
        <Footer />
      </div>
      
      {activeArticle && <Main activeArticle={activeArticle} isVisible={isArticleVisible} />}

    </div>
  );
};

export default App;
