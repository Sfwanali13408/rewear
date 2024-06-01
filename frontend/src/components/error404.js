import React from 'react';
import { Link } from 'react-router-dom';
import error_image from '../assests/error-404.png';
 
const Error404 = () => {
  return (
    <div className="d-flex justify-content-center align-items-center m-0" style={{ minHeight: "90vh" }}>
      <div className="text-center m-0">
        <div >
          <img src={error_image} style={{ width: "300px", height: "300px" }} alt="Error 404" />
        </div>
        <h1 className="display-1">Error 404: Page Not Found</h1>
        <p className="lead">Oops! The page you are looking for does not exist.</p>
        <Link to="/" className="btn btn-primary bg-dark border-0">Go to Home</Link>
      </div>
    </div>
  );
};

export default Error404;
