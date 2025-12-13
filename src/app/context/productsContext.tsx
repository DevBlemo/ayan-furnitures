import { createContext } from "react";
import { Product } from "../types/products";

// type ProductProps = {
//   id: string;
// };

const ProductContext = createContext<Product | null>(null);

export function ProductProvider({ children }: { children: React.ReactNode }) {

    

  return (
    <ProductContext.Provider value={}>
    {children}
    </ProductContext.Provider>
  )
}
