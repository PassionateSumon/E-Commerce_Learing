import { useContext, useRef } from "react";
import Modal from "../../UI/modal";
import "../AddNewproduct/addProduct.css";
import AppContext from "../../store/app-context";

function AddProduct() {
    const {showAddProd, closeAddProd, addNewProdductFunc} = useContext(AppContext);
    const inputRef = useRef();
    function handleAddProduct(event) {
        event.preventDefault();
        const prodName = inputRef.current.value;
        addNewProdductFunc(prodName);
    }
    return (
        <Modal show={showAddProd} close={closeAddProd}>
            <div className="add-product-container">
                <div className="add-product-heading">Add Product</div>
                <form onSubmit={handleAddProduct} className="add-product-form">
                    <div className="form-lebel">Enter Product Name</div>
                    <input ref={inputRef} className="form-input"/>
                    <button type="submit" className="submit-button">Add Procuct</button>
                </form>
            </div>
        </Modal>
    );
}

export default AddProduct;