import { Routes, Route, Router } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Products from "./pages/Products";
import Account from "./pages/Account/Account";
import Orders from "./pages/Account/Orders";
import Wishlist from "./pages/Account/Wishlist";
import Info from "./pages/Account/Info";
import Cart from "./pages/Cart";
import SingleProduct from "./pages/SingleProduct";
import Error from "./pages/Error";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="/account/orders" element={<Orders />} />
          <Route path="/account/wishlist" element={<Wishlist />} />
          <Route path="/account/info" element={<Info />} />
          <Route path="/account" element={<Account />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
