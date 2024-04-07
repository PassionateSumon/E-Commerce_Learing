import { createContext } from "react";
import App from "../App";

const AppContext = createContext({
    showCart:false,
    showAddProd:false,
    cartItems:[],
    allStoreProducts:[],
    openCart: () => {},
    closeCart: () => {},
    openAddProd: () => {},
    closeAddProd: () => {},
    handleAddToCart: () => {},
    handleQuantInc: () => {},
    handleQuantDec: () => {},
    addNewProdductFunc: () => {},
});

export default AppContext;