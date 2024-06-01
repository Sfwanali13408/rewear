import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import StarRating from './starcomponent'; // Assuming you have a StarRating component

const ProductCard = ({ product, handleAddToCart, handleAddToWishlist }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  
  const handleWishlistClick = () => {
    handleAddToWishlist(product);
    setIsWishlisted(!isWishlisted);
  };

  return (
    <div className="col-sm-6 col-md-4 col-lg-3 mb-3">
      <div className="card h-100">
        <img
          src={product.image}
          alt={product.name}
          className="card-img-top"
          style={{ height: '200px', objectFit: 'cover' }}
        />
        <div className="card-body d-flex flex-column p-2">
          <h5 className="card-title text-truncate" title={product.name}>
            {product.name}
          </h5>
          <p className="card-text mb-1">PKR {product.price}</p>
          <div className="mb-2">
            <StarRating condition={product.condition} />
          </div>
          <div className="mt-auto d-flex justify-content-around">
            <button
              className="btn btn-outline-secondary btn-sm"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart <FontAwesomeIcon icon={faShoppingCart} />
            </button>
            <button
              className="btn btn-outline-danger btn-sm"
              onClick={handleWishlistClick}
            >
              Add to Wishlist {isWishlisted ? <FontAwesomeIcon icon={faHeart} /> : <FontAwesomeIcon icon={faHeartRegular} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
