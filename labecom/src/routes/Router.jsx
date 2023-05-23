import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Products } from "../pages/Products/Products";
import { Cart } from "../pages/Cart/Cart";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />

        <Route path="/home/products" element={<Products/>} />

        <Route path="/home/cart" element={<Cart/>} />
      </Routes>
    </BrowserRouter>
    )
}