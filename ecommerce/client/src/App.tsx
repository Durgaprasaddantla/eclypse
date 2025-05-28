import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import ProductDetails from "./components/ProductDetails";
import ProductInfo from "./components/ProductInfo";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";

// Fixed asset path
import Image1 from "./assests/Image1.jpg";
import Image2 from "./assests/Image2.jpg";
import Image3 from "./assests/Image3.jpg";

// Define Product interface
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  sizes: string[];
  images: string[];
}

// Sample product data
const mockProduct: Product = {
  id: 1,
  name: "Eclipse",
  description:
    "Premium quality product with sustainable materials and exceptional craftsmanship. Designed for comfort and style.",
  price: 2999,
  sizes: ["S", "M", "L", "XL", "XXL"],
  images: [Image1, Image2, Image3],
};

export default function App() {
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [cartCount, setCartCount] = useState<number>(0);

  const handleAddToCart = () => {
    if (selectedSize) {
      // API call to add to cart
      fetch("/api/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId: mockProduct.id,
          size: selectedSize,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          setCartCount(data.cartCount);
        })
        .catch((error) => {
          console.error("Error adding to cart:", error);
          // Fallback to local state update
          setCartCount((prev) => prev + 1);
        });
    }
  };

  // Fetch initial cart count
  useEffect(() => {
    fetch("/api/cart")
      .then((res) => res.json())
      .then((data) => setCartCount(data.count))
      .catch(console.error);
  }, []);

  return (
    <div className="min-h-screen font-sans bg-gray-900 text-white">
      <Header cartCount={cartCount} />
      <main className="max-w-6xl mx-auto px-4">
        <ProductDetails
          product={mockProduct}
          selectedSize={selectedSize}
          onSizeSelect={setSelectedSize}
          onAddToCart={handleAddToCart}
        />
        <ProductInfo />
        <Testimonial />
      </main>
      <Footer />
    </div>
  );
}
