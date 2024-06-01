import React, { useState, useRef, useEffect } from 'react';
import './navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

function Navbar() {
  const [showCart, setShowCart] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const tokenname = localStorage.getItem('token');
    if (tokenname) {
      const decodedPayload = jwtDecode(tokenname, { header: false });
      console.log('Decoded Payload:', decodedPayload);
      const { name, email } = decodedPayload;
      localStorage.setItem('name', name);
      setUserName(name);
      localStorage.setItem('email', email);
      console.log(name, email);
    }
  }, []);

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No token found');
      }

      await axios.post(
        'http://localhost:3001/api/logout',
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Clear localStorage and update state
      localStorage.removeItem('token');
      localStorage.removeItem('email');
      localStorage.removeItem('name');

      console.log('User Logged out Successfully');
      navigate('/login');
    } catch (error) {
      let errorMsg = 'An unexpected error occurred.';
      if (error.response) {
        errorMsg = error.response.data.message;
        console.log(errorMsg);
      } else if (error.request) {
        errorMsg = 'Network error. Please try again later.';
        console.log(errorMsg);
      }
    }
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const toggleDropdown = (event) => {
    event.preventDefault();
    setShowDropdown(!showDropdown);
  };

  const isLoggedIn = !!localStorage.getItem('token');

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <h2 className='logo' style={{ fontFamily: 'Vujahday Script, cursive', fontSize: '40px', fontWeight: 'bold' }}>Re Wear</h2>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" style={{ fontSize: '20px' }}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/shop" style={{ fontSize: '20px' }}>Shop</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart" onClick={toggleCart} style={{ fontSize: '20px' }}>
                <FontAwesomeIcon icon={faShoppingCart} /> Cart
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/wishlist" style={{ fontSize: '20px' }}>
                <FontAwesomeIcon icon={faHeart} /> Wishlist
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            {isLoggedIn ? (
              <li className="nav-item dropdown" ref={dropdownRef}>
                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" aria-expanded="false" onClick={toggleDropdown}>
                  <FontAwesomeIcon icon={faUser} />
                  <span className="ms-2">{userName}</span>
                </a>
                <ul className={`dropdown-menu ${showDropdown ? 'show' : ''}`} aria-labelledby="navbarDropdown" style={{ right: 0 }}>
                  <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
                  <li><Link className="dropdown-item" to="/orders">Orders</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><button className="dropdown-item" onClick={handleLogout}>Logout</button></li>
                </ul>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="/login" style={{ fontSize: '20px' }}>Login</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
