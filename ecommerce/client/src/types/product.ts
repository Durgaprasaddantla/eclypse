// ✅ Correct implementation
export type Product = {
  // Must have 'export' keyword
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description?: string;
};
