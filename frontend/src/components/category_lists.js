import React, { useState } from 'react';
import './stylesheets/navbar.css';

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
    </div>
  );
}

export default Categorylists;