import React from 'react';
import { Link } from 'react-router-dom';

function Confluence() {
    return (
      <div>
          <h3>최근에 작업한</h3>
          <p>
              오늘</p>
              <Link to="./">김민형-2024년 07월</Link>
          <p>
          마지막 주</p>    
          <Link to="./">김민형-2024년 06월</Link><br></br>
          <Link to="./">홍길동-2024년 06월</Link>
          <p>
          한달 이상 이전
          </p>
          <Link to="./">김민형-2024년 05월</Link><br></br>
          <Link to="./">홍길동-2024년 05월</Link>
      </div>
    )
  };

export default Confluence;