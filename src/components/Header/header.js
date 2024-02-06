import "./header.css";

function Header({openCart, openAddProd}) {
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
