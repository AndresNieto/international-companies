import React from "react";
import PropTypes from 'prop-types';

const Card = ({ product }) => {
  return (
    <div className="card m-2">
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{product.brand}</h6>
        <div className="d-flex flex-row">
          <div className="product-image col-md-4">
            <img src={product.photo} className="w-100" alt={product.name}></img>
          </div>
          <div className="product-content col-md-8">
            <p className="card-text">{product.description}</p>
            <p className="m-0">
              <b>Stock:</b> {product.stock}
            </p>
            <p className="m-0">
              <b>Price:</b> $ {product.price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.protoTypes = {
  product : PropTypes.object.isRequired
}

export default Card;
