// src/menu/SideMenu.jsx
import React, { useState, useEffect } from 'react';
import './SideMenu.css';
import FestivalIntro from './FestivalIntro';


function SideMenu({ onMenuClick }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // 메뉴 바깥을 클릭하면 메뉴가 닫히도록 하는 useEffect
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.side-menu')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  // 메뉴 항목 클릭 시 메뉴를 닫는 함수
  const handleMenuItemClick = (path) => {
    onMenuClick(path); // 클릭한 메뉴의 경로를 상위 컴포넌트에 전달
    setIsOpen(false); // 메뉴를 닫음
  };

  return (
    <div className={`side-menu ${isOpen ? 'open' : ''}`}>
      <button className="menu-toggle" onClick={toggleMenu}>
        &#9776;
      </button>
      <div className="menu-content">
        <ul>
          <li onClick={() => handleMenuItemClick('/인하월드 홈.png')}>
            <img src="/sidemn/1.png" alt="축제홈피" />
          </li>
          <FestivalIntro onClick={handleMenuItemClick} />
          <li onClick={() => handleMenuItemClick(['/부스/부스안내.png','/부스/푸드트럭.png', '/부스/플리마켓.png'])}>
            <img src="/sidemn/3.png" alt="부스" />
          </li>
          <li onClick={() => handleMenuItemClick(['/lineup/폴블랑코.gif', '/lineup/릴보이.gif', '/lineup/백아연.gif', '/lineup/qwer.gif'])}>
            <img src="/sidemn/4.png" alt="라인업" />
          </li>
          <li onClick={() => handleMenuItemClick('/총학 이벤트.png')}>
            <img src="/sidemn/5.png" alt="이벤트" />
          </li>
          <li onClick={() => handleMenuItemClick(['/타임테이블.png', '/타임테이블 31.png'])}>
            <img src="/sidemn/6.png" alt="타임 테이블" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideMenu;