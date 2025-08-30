import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import AuthPage from './components/AuthPage';
import LoadingScreen from './components/LoadingScreen';
import Partnership from './components/Partnership';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'partnership'>('home');

  const handleLogin = () => {
    setIsLoading(true);
    // Simulate loading time
    setTimeout(() => {
      setIsLoading(false);
    setShowAuth(false);
    setIsLoggedIn(true);
    }, 2000);
  };

  const handleSignUp = () => {
    setAuthMode('signup');
    setShowAuth(true);
  };

  const handleSignIn = () => {
    setAuthMode('signin');
    setShowAuth(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleBackToHome = () => {
    setShowAuth(false);
    setCurrentPage('home');
  };

  const handleShowPartnership = () => {
    setCurrentPage('partnership');
    setShowAuth(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleShowHome = () => {
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRequestPartnership = () => {
    // Handle partnership request - could open a modal or redirect to contact form
    alert('Partnership request functionality would be implemented here');
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (showAuth) {
    return (
      <AuthPage
        onBack={handleBackToHome}
        onLogin={handleLogin}
        initialMode={authMode}
      />
    );
  }

  if (currentPage === 'partnership') {
    return (
      <div className="min-h-screen">
        <Header 
          isLoggedIn={isLoggedIn}
          onLogin={handleSignIn}
          onSignUp={handleSignUp}
          onLogout={handleLogout}
          onShowHome={handleShowHome}
          onShowPartnership={handleShowPartnership}
          currentPage={currentPage}
        />
        <Partnership onRequestPartnership={handleRequestPartnership} />
        <Footer onShowPartnership={handleShowPartnership} />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header 
        isLoggedIn={isLoggedIn}
        onLogin={handleSignIn}
        onSignUp={handleSignUp}
        onLogout={handleLogout}
        onShowHome={handleShowHome}
        onShowPartnership={handleShowPartnership}
        currentPage={currentPage}
      />
      <Hero 
        isLoggedIn={isLoggedIn}
        onSignUp={handleSignUp}
      />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <Footer onShowPartnership={handleShowPartnership} />
    </div>
  );
}

export default App;