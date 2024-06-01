<<<<<<< HEAD
import React from 'react';
// import './stylesheets/navbar.css';
=======
import React, { useState } from 'react';
import './stylesheets/navbar.css';

>>>>>>> a81445aebe1174fc28c1afbe8084dc424af045aa
function Categorylists() {
  const [allCategoriesExpanded, setAllCategoriesExpanded] = useState(false);
  const [menExpanded, setMenExpanded] = useState(false);
  const [womenExpanded, setWomenExpanded] = useState(false);
  const [childrenExpanded, setChildrenExpanded] = useState(false);
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

  const toggleAllCategories = () => {
    setAllCategoriesExpanded(prevState => !prevState);
  };
  
  const toggleMen = () => {
    setMenExpanded(prevState => !prevState);
  };
  
  const toggleWomen = () => {
    setWomenExpanded(prevState => !prevState);
  };
  
  const toggleChildren = () => {
    setChildrenExpanded(prevState => !prevState);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuVisible(prevState => !prevState);
  };

  return (
    <div>
<<<<<<< HEAD
      <div className="navbar bg-dark ">
        <ul className="nav">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: 'white' }}>
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
=======
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button 
          className="navbar-toggler d-lg-none" 
          type="button" 
          onClick={toggleMobileMenu} 
          aria-expanded={isMobileMenuVisible ? "true" : "false"}
          aria-controls="navbarNav"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isMobileMenuVisible ? 'show' : ''}`} id="navbarNav">
          <ul className="nav justify-content-center w-100">
            <li className="nav-item dropdown" onMouseEnter={toggleAllCategories} onMouseLeave={toggleAllCategories}>
              <button
                className="btn btn-dark dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                aria-expanded={allCategoriesExpanded ? "true" : "false"}
              >
                All Categories
              </button>
              {allCategoriesExpanded && (
                <ul className="dropdown-menu bg-dark show" aria-labelledby="dropdownMenuButton">
                  <li className="dropdown-item bg-dark" onMouseEnter={toggleMen} onMouseLeave={toggleMen}>
                    <button
                      className="btn btn-dark dropdown-toggle border-0"
                      type="button"
                      aria-expanded={menExpanded ? "true" : "false"}
                    >
                      Men's Clothing
                    </button>
                    <div className={`collapse ${menExpanded ? "show" : ""}`}>
                      <ul className="list-unstyled">
                        <li><a href="/men/event-dresses" className="dropdown-item bg-dark text-light">Event Dresses</a></li>
                        <li><a href="/men/summer-collection" className="dropdown-item bg-dark text-light">Summer Collection</a></li>
                        <li><a href="/men/winter-collection" className="dropdown-item bg-dark text-light">Winter Collection</a></li>
                        <li><a href="/men/shoes-collection" className="dropdown-item bg-dark text-light">Shoes Collection</a></li>
                      </ul>
                    </div>
                  </li>
                  <li className="dropdown-item bg-dark" onMouseEnter={toggleWomen} onMouseLeave={toggleWomen}>
                    <button
                      className="btn btn-dark dropdown-toggle"
                      type="button"
                      aria-expanded={womenExpanded ? "true" : "false"}
                    >
                      Women's Clothing
                    </button>
                    <div className={`collapse ${womenExpanded ? "show" : ""}`}>
                      <ul className="list-unstyled">
                        <li><a href="/women/event-dresses" className="dropdown-item bg-dark text-light">Event Dresses</a></li>
                        <li><a href="/women/summer-collection" className="dropdown-item bg-dark text-light">Summer Collection</a></li>
                        <li><a href="/women/winter-collection" className="dropdown-item bg-dark text-light">Winter Collection</a></li>
                        <li><a href="/women/shoes-collection" className="dropdown-item bg-dark text-light">Shoes Collection</a></li>
                      </ul>
                    </div>
                  </li>
                  <li className="dropdown-item bg-dark" onMouseEnter={toggleChildren} onMouseLeave={toggleChildren}>
                    <button
                      className="btn btn-dark dropdown-toggle"
                      type="button"
                      aria-expanded={childrenExpanded ? "true" : "false"}
                    >
                      Children's Clothing
                    </button>
                    <div className={`collapse ${childrenExpanded ? "show" : ""}`}>
                      <ul className="list-unstyled">
                        <li><a href="/children/event-dresses" className="dropdown-item bg-dark text-light">Event Dresses</a></li>
                        <li><a href="/children/summer-collection" className="dropdown-item bg-dark text-light">Summer Collection</a></li>
                        <li><a href="/children/winter-collection" className="dropdown-item bg-dark text-light">Winter Collection</a></li>
                        <li><a href="/children/shoes-collection" className="dropdown-item bg-dark text-light">Shoes Collection</a></li>
                      </ul>
                    </div>
                  </li>
                </ul>
              )}
            </li>
            <li className="nav-item" style={{ marginLeft: "70px" }}>
              <input
                type="text"
                className="form-control me-2"
                placeholder="Search Product"
              />
            </li>
          </ul>
        </div>
      </nav>
>>>>>>> a81445aebe1174fc28c1afbe8084dc424af045aa
    </div>
  );
}

export default Categorylists;