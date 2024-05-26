import React from 'react';
import './stylesheets/navbar.css';
function Categorylists() {
  return (
    <div>
      <div className="navbar bg-dark ">
        <ul className="nav">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: 'white'}}>
              Men's Clothing
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="/" style={{ color: 'black' }}>Event Dresses</a></li>
              <li><a className="dropdown-item" href="/" style={{ color: 'black' }}>Summer Collection</a></li>
              <li><a className="dropdown-item" href="/" style={{ color: 'black' }}>Winter Collection</a></li>
              <li><a className="dropdown-item" href="/" style={{ color: 'black' }}>Shoes Collection</a></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: 'white' }}>
              Women's Clothing
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="/" style={{ color: 'black' }}>Event Dresses</a></li>
              <li><a className="dropdown-item" href="/" style={{ color: 'black' }}>Summer Collection</a></li>
              <li><a className="dropdown-item" href="/" style={{ color: 'black' }}>Winter Collection</a></li>
              <li><a className="dropdown-item" href="/" style={{ color: 'black' }}>Shoes Collection</a></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: 'white' }}>
              Children's Clothing
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="/" style={{ color: 'black' }}>Event Dresses</a></li>
              <li><a className="dropdown-item" href="/" style={{ color: 'black' }}>Summer Collection</a></li>
              <li><a className="dropdown-item" href="/" style={{ color: 'black' }}>Winter Collection</a></li>
              <li><a className="dropdown-item" href="/" style={{ color: 'black' }}>Shoes Collection</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <input type='text' className="form-control me-2" placeholder='Search Product' style={{ color: 'black' }} />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Categorylists;
