import React, { useState, useEffect } from 'react';
import './stylesheets/navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const Navbar = () => {
  const [showCart, setShowCart] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    console.log('Stored user:', storedUser);
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        navigate('/login');
        return;
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
      localStorage.removeItem('user');
      localStorage.removeItem('token');

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


  const isLoggedIn = !!localStorage.getItem('token');

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <h2 className='logo' style={{ fontFamily: 'Vujahday Script, cursive', fontSize: '40px', fontWeight: 'bold' }}>Re Wear</h2>
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" style={{ fontSize: '20px' }}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/shop" style={{ fontSize: '20px' }}>Sell</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart" onClick={toggleCart} style={{ fontSize: '20px' }}>
                <FontAwesomeIcon icon={faCartShopping} />
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/wishlist" style={{ fontSize: '20px' }}>
                <FontAwesomeIcon icon={faHeart} /> Wishlist
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav" style={{ fontSize: '20px' }}>
            {isLoggedIn ? (
              
              <li className="nav-item dropdown">
                <span className="nav-link dropdown-toggle" id="navbarDropdown" role="button" aria-expanded="false">
                  <FontAwesomeIcon icon={faUser} />
                  {user && (
                  <span className="ms-2 user-select-none">{user.profile.name}</span>
                  )}
                </span>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown" style={{ right: 0 }}>
                  <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
                  <li><Link className="dropdown-item" to="/orders">Orders</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><button className="dropdown-item" onClick={handleLogout}>Logout</button></li>
                </ul>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;