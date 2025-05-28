const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3001;

// Enable CORS for all routes
app.use(cors());
app.use(express.json());

// In-memory database
let cart = [];
let cartCount = 0;

// Dummy product data
const products = [
  {
    id: 1,
    name: "Eclipse",
    description: "Premium quality product with sustainable materials",
    price: 2999,
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
];

// API Endpoints
app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/cart", (req, res) => {
  res.json({
    count: cartCount,
    items: cart,
  });
});

app.post("/api/cart", (req, res) => {
  const { productId, size } = req.body;

  // Find product
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }

  // Add to cart
  cart.push({
    ...product,
    size,
    quantity: 1,
    addedAt: new Date(),
  });

  cartCount = cart.length;

  res.json({
    success: true,
    cartCount,
    message: "Product added to cart",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
