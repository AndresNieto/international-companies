import React from "react";
import { useSelector } from "react-redux";
import Spinner from "../../UI/Spinner";
import Card from "../../UI/Card";
import InfoProducts from "../../UI/InfoProducts";

const ProductsList = () => {
  const { productsList, totalProducts, loading } = useSelector((state) => state.products);
  const totalShowing = productsList.length;
  const totalHidden = totalProducts - totalShowing;
  return (
    <div className="col-md-8 mt-5 product-list">
      {loading ? (
        <div className="form-group text-center">
          <Spinner />
        </div>
      ) : null}
      <InfoProducts
        totalShowing={totalShowing}
        totalHidden={totalHidden}
      />
      {productsList.length === 0 ? (
        <h1>No products found</h1>
      ) : (
        productsList.map((product) => (
          <Card key={product.id} product={product} />
        ))
      )}
    </div>
  );
};
ProductsList.propTypes = {}
export default ProductsList;


