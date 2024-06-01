import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import img1 from '../assests/1.png';
import img2 from '../assests/2.png';
import img3 from '../assests/3.png';
import img4 from '../assests/4.png';
import clothing from '../assests/clothing.png';
import shoes from '../assests/shoes.png';
import main1Image from '../assests/main-1.png';
import { Link } from 'react-scroll'; // Import from the react-scroll library
import ProductCard from '../components/ProductCard'; // Import the ProductCard component

function Home() {
  const images = [img1, img2, img3, img4];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, Math.floor(Math.random() * (4000 - 3000 + 1)) + 3000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  const featuredProducts = [
    { id: 1, name: 'Bridal Walima Dresses', price: 123, condition: '9/10', image: main1Image },
    { id: 2, name: 'Groom Walima Dresses', price: 456, condition: '8/10', image: main1Image },
    { id: 3, name: 'Bridal Mehndi Dresses', price: 789, condition: '7/10', image: main1Image },
    { id: 4, name: 'Groom Mehndi Dresses', price: 1024, condition: '6.5/10', image: main1Image },
    { id: 5, name: 'Groom Accessories', price: 1789, condition: '10/10', image: main1Image },
  ];

  const productsPerPage = 4;
  const totalPages = Math.ceil(featuredProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = featuredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const handleAddToCart = (product) => {
    console.log('Product added to cart:', product.name);
  };

  const handleBuy = (product) => {
    console.log('Redirecting to buying menu:', product.name);
  };

  const handleAddToWishlist = (product) => {
    console.log('Added to Wishlist:', product.name);
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container-fluid">
<<<<<<< HEAD:frontend/src/pages/index.js
      <div className="bg-light text-center py-5"
        style={{ backgroundImage: `url(${images[currentIndex]})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '610px', width: '100%', borderRadius: '5px', marginTop: '5px' }}>
=======
      <div className="bg-light text-center py-5 mx-auto" 
           style={{ backgroundImage: `url(${images[currentIndex]})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '450px', width: '80%', borderRadius: '5px', marginTop: '5px' }}>
>>>>>>> a81445aebe1174fc28c1afbe8084dc424af045aa:frontend/src/routes/index.js
      </div>

      <div className="container-fluid mb-4" style={{ backgroundColor: 'maroon', borderRadius: '5px', marginTop: '15px' }}>
        <h2 className="text-white text-center">Major Categories</h2>
        <div className="row text-center text-white py-3 rounded">
          <div className="col">
            <Link to="Event-dresses" className="text-decoration-none text-white">
              <img src={main1Image} alt="Bridal Dresses" className="img-fluid rounded-circle mb-2" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
              <p>Bridal Dresses</p>
            </Link>
          </div>
          <div className="col">
            <Link to="summer-clothing" className="text-decoration-none text-white">
              <img src={main1Image} alt="Groom Dresses" className="img-fluid rounded-circle mb-2" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
              <p>Groom Dresses</p>
            </Link>
          </div>
          <div className="col">
            <Link to="winter-clothing" className="text-decoration-none text-white">
              <img src={clothing} alt="Clothing" className="img-fluid rounded-circle mb-2" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
              <p>Clothing</p>
            </Link>
          </div>
          <div className="col">
            <Link to="shoes" className="text-decoration-none text-white">
              <img src={shoes} alt="Shoes" className="img-fluid rounded-circle mb-2" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
              <p>Shoes</p>
            </Link>
          </div>
        </div>
      </div>

      <div className="container my-4">
        <h2 className="text-center mb-4">Featured Products</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
<<<<<<< HEAD:frontend/src/pages/index.js
          {currentProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              handleBuy={handleBuy}
              handleAddToCart={handleAddToCart}
              handleAddToWishlist={handleAddToWishlist}
            />
=======
        {currentProducts.map(product => (  
          <ProductCard 
            key={product.id}
            product={product} 
            handleBuy={handleBuy} 
            handleAddToCart={handleAddToCart} 
            handleAddToWishlist={handleAddToWishlist} 
          />
>>>>>>> a81445aebe1174fc28c1afbe8084dc424af045aa:frontend/src/routes/index.js
          ))}
        </div>
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center mt-4">
            {Array.from({ length: totalPages }, (_, index) => (
              <li key={index} className={`page-item ${index + 1 === currentPage ? 'active' : ''}`}>
              <button
                className={`page-link rounded-2 mx-1 ${index + 1 === currentPage ? 'bg-dark border-0 text-white' : 'bg-light border-1'} text-black`}
                onClick={() => handlePageClick(index + 1)}
              >
                {index + 1}
              </button>
              </li>
            
            
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Home;
