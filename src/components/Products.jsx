import ProductsData from "../Data/products.json";
import "./products.css";

function Product({ id, name, image, onAddToCart}) {
  return (
    <div key={id} className="product">
      <img src={require(`../assets/${image}`)} alt={name} />
      <div className="product-name"> {name} </div>
      <button onClick={() => onAddToCart(id, name, image)}>Add to Cart</button>
    </div>
  );
}

function Products({ onAddToCart }) {
  return (
    <div className="products-container">
      {ProductsData.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          name={product.name}
          image={product.image}
          onAddToCart={onAddToCart}     
        />
      ))}
    </div>
  );
}

export default Products;
