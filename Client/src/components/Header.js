import React from 'react';
import './styles/Header.css';

const pages = [
    {href: "about", pageName: "About"},
    {href: "projects", pageName: "Projects"},
    {href: "contact", pageName: "Contact"},
    {href: "resume", pageName: "Resume"}
];

function Header({ currentPage, handlePageChange }) {

  return (
    <div className='header'>
    <ul className="nav nav-tabs">
    {pages.map(p => (
        <li className="nav-item">
        <a
          href={`#${p.href}`}
          onClick={() => handlePageChange(p.pageName)}
          className={currentPage === p.pageName ? 'nav-link active' : 'nav-link'}
        >
          {p.pageName}
        </a>
      </li>
    )
    )
    }
    </ul>
    </div>
  );
}

export default Header;