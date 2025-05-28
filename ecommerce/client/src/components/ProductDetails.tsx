import React, { useState } from "react";

// Define Product interface
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  sizes: string[];
  images: string[];
}

interface ProductDetailsProps {
  product: Product;
  selectedSize: string;
  onSizeSelect: (size: string) => void;
  onAddToCart: () => void;
}

export default function ProductDetails({
  product,
  selectedSize,
  onSizeSelect,
  onAddToCart,
}: ProductDetailsProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const productImages = product.images || [];

  const handleThumbnailClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <section className="py-12">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Product Image Gallery */}
        <div className="space-y-4">
          {/* Main Image */}
          <div className="bg-gray-800/30 border border-indigo-800 rounded-xl h-96 flex items-center justify-center overflow-hidden">
            {productImages.length > 0 ? (
              <img
                src={productImages[currentImageIndex]}
                alt={`${product.name} - View ${currentImageIndex + 1}`}
                className="max-w-full max-h-full object-contain p-4"
              />
            ) : (
              <div className="text-indigo-300 text-lg">Product Image</div>
            )}
          </div>

          {/* Thumbnail Gallery */}
          <div className="flex flex-wrap gap-3 justify-center">
            {productImages.map((image, index) => (
              <button
                key={index}
                onClick={() => handleThumbnailClick(index)}
                className={`w-16 h-16 rounded-md overflow-hidden border-2 transition-all ${
                  index === currentImageIndex
                    ? "border-indigo-500 scale-105"
                    : "border-indigo-800 hover:border-indigo-500"
                }`}
                aria-label={`View product image ${index + 1}`}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="bg-gray-800/20 border border-indigo-800 rounded-xl p-8 space-y-6">
          <h1 className="text-4xl font-bold text-white">{product.name}</h1>
          <p className="text-indigo-200">{product.description}</p>
          <p className="text-2xl text-indigo-300">
            ₹{product.price.toLocaleString()}
          </p>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-indigo-100">
                Please select a size
              </h3>
              <a
                href="#"
                className="text-sm underline text-indigo-300 hover:text-white"
              >
                Size chart
              </a>
            </div>

            <div className="grid grid-cols-5 gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => onSizeSelect(size)}
                  className={`border border-indigo-700 py-2 rounded-md transition-all ${
                    selectedSize === size
                      ? "bg-indigo-700 text-white shadow-lg shadow-indigo-900/50"
                      : "bg-gray-900/50 text-indigo-200 hover:bg-indigo-800/50"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-4 flex-wrap">
            <button
              onClick={onAddToCart}
              disabled={!selectedSize}
              className={`${
                selectedSize
                  ? "bg-indigo-600 hover:bg-indigo-700 cursor-pointer"
                  : "bg-gray-700 cursor-not-allowed"
              } flex-1 py-3 px-6 rounded-md transition-colors`}
            >
              Add to Cart
            </button>
            <button className="bg-indigo-900 hover:bg-indigo-800 flex-1 py-3 px-6 rounded-md transition-colors">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
