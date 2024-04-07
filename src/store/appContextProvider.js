import React, { useState } from "react";
import AppContext from "./app-context";
import initialProducts from "../Data/products.json";
import Products from "../components/Products";

const AppContextProvider = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [showAddProd, setShowAddProd] = useState(false);

  const [cartItems, setCartitems] = useState([]);
  const [allStoreProducts, setAllStoreProducts] = useState(initialProducts);

  const openCart = () => setShowCart(true);
  const closeCart = () => setShowCart(false);

  const openAddProd = () => setShowAddProd(true);
  const closeAddProd = () => setShowAddProd(false);

  const handleAddToCart = (prodId, prodName, prodImage) => {
    // <<<--- Not-Optimize Process ----->>>
    // let updatedCartItems = cartItems;
    // updatedCartItems = updatedCartItems.concat({
    //   id: prodId,
    //   name: prodName,
    //   image: prodImage
    // })
    // setCartitems(updatedCartItems);

    // <<<------ Optimize Process -------->>>>
    const indexOfCartItem = cartItems.findIndex((item) => item.id === prodId);

    if (indexOfCartItem === -1) {
      // Here we will be using "Spread-Operator"
      const addNewItems = {
        id: prodId,
        name: prodName,
        image: prodImage,
        quantity: 1,
      };
      // Here receiving "state" means -> the previous state
      setCartitems((state) => [...state, addNewItems]);
    } else {
      const updateQuant = [...cartItems];
      updateQuant[indexOfCartItem].quantity += 1;
      setCartitems(updateQuant);
    }
  };

  const handleQuantInc = (prodId) => {
    const indexOfCartItem = cartItems.findIndex((item) => item.id === prodId);

    const updateQuant = [...cartItems];
    updateQuant[indexOfCartItem].quantity += 1;
    setCartitems(updateQuant);
  };

  const handleQuantDec = (prodId) => {
    const indexOfCartItem = cartItems.findIndex((item) => item.id === prodId);
    if (indexOfCartItem === -1) return null;

    let updateQuant = [...cartItems];
    const currQnt = cartItems[indexOfCartItem].quantity;
    if (currQnt === 1) {
      updateQuant = updateQuant.filter((item) => item.id !== prodId);
    } else {
      updateQuant[indexOfCartItem].quantity -= 1;
    }
    setCartitems(updateQuant);
  };

  const addNewProdductFunc = (newProdName) => {
    const prod = {
      id: Products.length + 1,
      name: newProdName,
      image: "default_product.png",
    };

    setAllStoreProducts((state) => [...state, prod]);
    setShowAddProd(false);
  };
  const allAddContext = {
    showCart,
    showAddProd,
    cartItems,
    allStoreProducts,
    openCart,
    closeCart,
    openAddProd,
    closeAddProd,
    handleAddToCart,
    handleQuantInc,
    handleQuantDec,
    addNewProdductFunc,
  };
  return (
    <AppContext.Provider value={allAddContext}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;
