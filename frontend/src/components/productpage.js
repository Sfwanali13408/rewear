import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductPage = ({ products }) => {

  // Assuming product details include condition, size, and brand
  const { name, price, condition, size, brand, image } = products;

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img src={image} alt={name} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h2>{name}</h2>
          <p>Price: {price}</p>
          <p>Condition: {condition}</p>
          <p>Size: {size}</p>
          <p>Brand: {brand}</p>
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>

      <hr />

      <h3>Other Products in the Same Category</h3>
      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-md-3 mb-4">
            <div className="card">
              <img src={product.image} alt={product.name} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Price: {product.price}</p>
                <button className="btn btn-outline-primary">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
