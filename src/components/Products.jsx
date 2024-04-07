import { useContext } from "react";
import "./products.css";
import AppContext from "../store/app-context";

function Product({ id, name, image }) {
  const { handleAddToCart } = useContext(AppContext);
  return (
    <div key={id} className="product">
      <img src={require(`../assets/${image}`)} alt={name} />
      <div className="product-name"> {name} </div>
      <button onClick={() => handleAddToCart(id, name, image)}>
        Add to Cart
      </button>
    </div>
  );
}

function Products() {
  const { allStoreProducts } = useContext(AppContext);
  return (
    <div className="products-container">
      {allStoreProducts.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          name={product.name}
          image={product.image}
        />
      ))}
    </div>
  );
}

export default Products;
