import React from "react";
import Categories from "./Categories";
import ProductsList from "./ProductsList";

const ProductsPage = () => {

  return (
    <div className="d-flex h-100 d-inline-block">
      <Categories/>      
      <ProductsList/>
    </div>
  );
};

ProductsPage.propTypes = {};
export default ProductsPage;
