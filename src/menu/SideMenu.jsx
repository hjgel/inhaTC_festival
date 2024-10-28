// src/menu/SideMenu.jsx
import React, { useState } from 'react'; // 수정된 부분
import './SideMenu.css';

function SideMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={`side-menu ${isOpen ? 'open' : ''}`}>
      <button className="menu-toggle" onClick={toggleMenu}>
        &#9776;
      </button>
      <div className="menu-content">
        <ul>
          <li>
            <img src="/sidemn/1.png" alt="축제소개"/>
          </li>
          <li>
            <img src="/sidemn/2.png" alt="부스" />
          </li>
          <li>
            <img src="/sidemn/3.png" alt="라인업" />
          </li>
          <li>
            <img src="/sidemn/4.png" alt="타임 테이블" />
          </li>
          <li>
            <img src="/sidemn/5.png" alt="분실물" />
          </li>
          <li>
            <img src="/sidemn/6.png" alt="이벤트" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideMenu;