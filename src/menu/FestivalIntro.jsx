// src/menu/FestivalIntro.jsx
import React from 'react';

function FestivalIntro({ onClick }) {
  return (
    <li onClick={() => onClick('/hi/축제소개.png')}>
      <img src="/sidemn/2.png" alt="축제소개" />
    </li>
  );
}

export default FestivalIntro;
