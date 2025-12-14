import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import CityExplorer from './pages/CityExplorer';
import Landing from './pages/Landing';

function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => setCurrentHash(window.location.hash);
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleLandingSelect = (mode) => {
    if (mode === 'explore') window.location.hash = '#explore';
    else window.location.hash = '#dashboard';
  };

  if (!currentHash || currentHash === '#') {
    return <Landing onSelect={handleLandingSelect} />;
  }

  return (
    <div className="dashboard-container">
      <Sidebar />
      <main className="main-content">
        {currentHash === '#explore' ? <CityExplorer /> : <Dashboard />}
      </main>
    </div>
  );
}

export default App;
