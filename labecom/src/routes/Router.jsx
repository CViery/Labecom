import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Products } from "../pages/Products";
import { Cart } from "../pages/Cart";

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