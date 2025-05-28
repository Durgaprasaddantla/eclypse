import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.json({
    id: 1,
    name: "Weighted Shoulder Product",
    description:
      "A number being called in this list means a new product can be made with a weighted shoulder and softened hem, this piece captures presence without force.",
    price: 7999,
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
  });
});

export default router;
