// src/components/ProductCard.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollar, faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';
import StarRating from './starcomponent';

const ProductCard = ({ product, handlebuy, handleAddToCart, handleAddToWishlist }) => {
  return (
    <div className="col">
      <div className="card h-100">
        <img src={product.image} alt={product.name} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">Price: PKR {product.price}</p>
          <p className="card-text">Condition: <StarRating condition={product.condition} /></p>
          <div className="d-flex justify-content-around">
            <button className="btn btn-outline-primary" onClick={() => handlebuy(product)}>
              <FontAwesomeIcon icon={faDollar} /> Buy Now
            </button>
            <button className="btn btn-outline-secondary" onClick={() => handleAddToCart(product)}>
              <FontAwesomeIcon icon={faShoppingCart} />
            </button>
            <button className="btn btn-outline-danger" onClick={() => handleAddToWishlist(product)}>
              <FontAwesomeIcon icon={faHeart} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
