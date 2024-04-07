import { useContext } from "react";
import "./header.css";
import AppContext from "../../store/app-context";

function Header() {
  const {openCart, openAddProd} = useContext(AppContext);
  return (
    <div className="main_header">
      <div className="heading">Store Hai!</div>
      
      <div className="right_header">
        <button className="bcg_border" onClick={openAddProd}>Add Products</button>
        <button className="bcg_border" onClick={openCart}>Cart</button>
      </div>
    </div>
  );
}

export default Header;
