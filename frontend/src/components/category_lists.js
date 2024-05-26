import React from 'react';
import './stylesheets/navbar.css';
import { Link } from 'react-router-dom';

function Categorylists() {
  return (
    <div>
      <div className="navbar bg-dark">
        <ul className="nav">
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              id="navbarDropdown1"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ color: 'white' }}
            >
              Men's Clothing
            </Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
              <li>
                <Link to="/men/event-dresses" className="dropdown-item" style={{ color: 'black' }}>
                  Event Dresses
                </Link>
              </li>
              <li>
                <Link to="/men/summer-collection" className="dropdown-item" style={{ color: 'black' }}>
                  Summer Collection
                </Link>
              </li>
              <li>
                <Link to="/men/winter-collection" className="dropdown-item" style={{ color: 'black' }}>
                  Winter Collection
                </Link>
              </li>
              <li>
                <Link to="/men/shoes-collection" className="dropdown-item" style={{ color: 'black' }}>
                  Shoes Collection
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              id="navbarDropdown2"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ color: 'white' }}
            >
              Women's Clothing
            </Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown2">
              <li>
                <Link to="/women/event-dresses" className="dropdown-item" style={{ color: 'black' }}>
                  Event Dresses
                </Link>
              </li>
              <li>
                <Link to="/women/summer-collection" className="dropdown-item" style={{ color: 'black' }}>
                  Summer Collection
                </Link>
              </li>
              <li>
                <Link to="/women/winter-collection" className="dropdown-item" style={{ color: 'black' }}>
                  Winter Collection
                </Link>
              </li>
              <li>
                <Link to="/women/shoes-collection" className="dropdown-item" style={{ color: 'black' }}>
                  Shoes Collection
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              id="navbarDropdown3"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ color: 'white' }}
            >
              Children's Clothing
            </Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown3">
              <li>
                <Link to="/children/event-dresses" className="dropdown-item" style={{ color: 'black' }}>
                  Event Dresses
                </Link>
              </li>
              <li>
                <Link to="/children/summer-collection" className="dropdown-item" style={{ color: 'black' }}>
                  Summer Collection
                </Link>
              </li>
              <li>
                <Link to="/children/winter-collection" className="dropdown-item" style={{ color: 'black' }}>
                  Winter Collection
                </Link>
              </li>
              <li>
                <Link to="/children/shoes-collection" className="dropdown-item" style={{ color: 'black' }}>
                  Shoes Collection
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <input
              type='text'
              className="form-control me-2"
              placeholder='Search Product'
              style={{ color: 'black' }}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Categorylists;
