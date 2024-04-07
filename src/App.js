import React from "react";
import Header from "./components/Header/header";
import Products from "./components/Products";
import Cart from "./components/Cart/cart";
import AddProduct from "./components/AddNewproduct/addProduct";
import AppContextProvider from "./store/appContextProvider";

function App() {
  return (
    <AppContextProvider>
      <Header />
      <Products />
      <Cart />
      <AddProduct />
    </AppContextProvider>
  );
}

export default App;
