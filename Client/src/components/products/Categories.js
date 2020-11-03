import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getProductsList } from "../../actions/productActions";
import { selectCategory, activeCategory } from "../../actions/categoryActions";

const Categories = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { category } = useParams();

  const categories = useSelector((state) => state.categories.categoriesList);
  
  const changeCategory = categoryName => {
    dispatch(selectCategory(categoryName));
    categories.forEach(category => (
      category.name === categoryName ? category.active = true : category.active = false
    ));    
    dispatch(activeCategory(categories));
    dispatch(getProductsList(categoryName))
    history.push(`/products/${categoryName}`);
  };

  useEffect(() => {
    changeCategory(category);    
  }, [category]);

  return (
    <div className="sidebar col-md-4 border-right menu-categories">
      <ul className="lista-categorias">        
        {categories.map((category) => (
          <li
          key={category.id}
          className={category.active ? 'p-2 ml-2 d-flex lista-categoria__item-active' : 'p-2 ml-2 d-flex'}
            onClick={() => changeCategory(category.name)}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

Categories.propTypes = {};
export default Categories;
