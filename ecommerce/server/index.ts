import express from "express";
import cors from "cors";
import productRoutes from "./routes/products";

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.use("/api/products", productRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
