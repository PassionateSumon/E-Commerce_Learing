import { useRef } from "react";
import Modal from "../../UI/modal";
import "../AddNewproduct/addProduct.css";

function AddProduct({ showAddProd, closeAddProd, onAddProd }) {
    const inputRef = useRef();
    function handleAddProduct(event) {
        event.preventDefault();
        const prodName = inputRef.current.value;
        onAddProd(prodName);
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