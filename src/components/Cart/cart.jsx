import { useContext } from "react";
import Modal from "../../UI/modal";
import "./cart.css";
import AppContext from "../../store/app-context";

function CurrentItems({ id, name, image, quantity }) {
  const {handleQuantInc, handleQuantDec} = useContext(AppContext);
  return (
    <div className="cart-item">
      <div className="item-img">
        <img src={require(`../../assets/${image}`)} alt={name} />
      </div>
      <div className="item-info">
        <div>{name}</div>
        <div className="item-qty">
          <div> Qty: {quantity} </div>
          <button className="qty-button qty-plus-button" onClick={() => handleQuantInc(id)}>
            +
          </button>
          <button className="qty-button qty-plus-button" onClick={() => handleQuantDec(id)}> 
            -
          </button>
        </div>
      </div>
    </div>
  );
}

function Cart() {
  const {showCart, closeCart, cartItems} = useContext(AppContext);
  return (
    <Modal show={showCart} close={closeCart}>
      <div className="cart-container">
        <div className="cart-heading">Cart</div>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <CurrentItems
              key={item.id} 
              id={item.id}
              name={item.name}
              image={item.image}
              quantity={item.quantity}
            />
          ))
        ) : (
          <div className="empty-cart">Cart is empty!!</div>
        )}
        <div className="cart-buttons">
          <button className="cart-buttons close-cart" onClick={closeCart}>
            Close
          </button>
          {cartItems.length > 0 ? (
            <button className="cart-buttons close-cart">Proceed</button>
          ) : (
            ""
          )}
        </div>
      </div>
    </Modal>
  );
}

export default Cart;
