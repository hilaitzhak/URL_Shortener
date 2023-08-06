import React from 'react';
import './App.scss';
import AppHeader from './components/header/header';
import AppContent from './components/content/content';
import AppFooter from './components/footer/footer';

function App() {
  return (
    <div className="app-wrapper">
      <AppHeader/>
      <AppContent/>
      <AppFooter/>
    </div>
  );
}

export default App;
