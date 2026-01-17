import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Carousel1 from "./components/Carousel1";
import Footer from "./components/Footer";
import ProductDetails from "./components/ProductDetails";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import { CartProvider } from "./context/CartContext";
import ContactModal from "./components/ContactModal";
import ProductCard from "./components/ProductCard";
import RatingStars from "./components/RatingStars";

export default function App() {
  return (
    <CartProvider>
      <div className="bg-black min-h-screen text-white flex flex-col">
        <Header />

        <div className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Carousel />
                  <Carousel1 />
                  <Home />

                </>
              }
            />

            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </CartProvider>
  );
}