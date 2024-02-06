import Modal from "../../UI/modal";

function AddProduct({ showAddProd, closeAddProd }) {
    return (
        <Modal show={showAddProd} close={closeAddProd}>
            Add
        </Modal>
    );
}

export default AddProduct;