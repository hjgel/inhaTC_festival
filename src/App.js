// src/App.js
import React, { useState } from 'react';
import SideMenu from './menu/SideMenu';
import './App.css';

function App() {
  const [selectedImages, setSelectedImages] = useState(['/인하월드 홈.png']); // 기본 이미지 설정

  const handleMenuClick = (images) => {
    setSelectedImages(Array.isArray(images) ? images : [images]);
  };

  return (
    <div className="App">
      <SideMenu onMenuClick={handleMenuClick} />
      <main className="content">
        <section className="content-section">
          {selectedImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Selected Display ${index}`}
              style={{
                width: '100%',
                maxWidth: '300px', // 최대 너비 설정
                height: 'auto',
                borderRadius: '8px',
                margin: '-1px', // 이미지 간격 조정
              }}
            />
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;