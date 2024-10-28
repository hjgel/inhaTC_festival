// src/App.js
import React from 'react';
import SideMenu from './menu/SideMenu';
import './App.css';

function App() {
  return (
    <div className="App">
      <SideMenu />
    
      
      <main className="content">
        <section className="content-section">
          <img src="/인하월드 홈.png" alt="인하공전 축제홈피" style={{ maxWidth: '100%', borderRadius: '8px' }} />
        </section>
      </main>
    </div>
  );
}

export default App;