import { Product } from "../../types/product";

// ✅ Helper function to safely parse localStorage data
const getCartFromLocalStorage = (): Product[] => {
  if (typeof window === "undefined") return []; // SSR check
  try {
    return JSON.parse(localStorage.getItem("cart") || "[]");
  } catch (error) {
    console.error("❌ Error parsing cart data:", error);
    return [];
  }
};

// ✅ Save cart to localStorage safely
const saveCartToLocalStorage = (cart: Product[]) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("cart", JSON.stringify(cart));
  }
};

// ✅ Add to Cart
export const addToCart = (product: Product) => {
  const cart = getCartFromLocalStorage();
  const existingProductIndex = cart.findIndex((item) => item._id === product._id);

  if (existingProductIndex > -1) {
    cart[existingProductIndex].stockLevel = (cart[existingProductIndex].stockLevel || 1) + 1;
  } else {
    cart.push({ ...product, stockLevel: 1 });
  }

  saveCartToLocalStorage(cart);
};

// ✅ Remove from Cart
export const removeFromCart = (productID: string) => {
  const cart = getCartFromLocalStorage();
  const updatedCart = cart.filter((item) => item._id !== productID);
  saveCartToLocalStorage(updatedCart);
};

// ✅ Update Cart Quantity
export const updateCartQuantity = (productID: string, quantity: number) => {
  const cart = getCartFromLocalStorage();
  const productIndex = cart.findIndex((item) => item._id === productID);

  if (productIndex > -1) {
    if (quantity < 1) {
      // Automatically remove product if quantity is less than 1
      return removeFromCart(productID);
    }
    cart[productIndex].stockLevel = quantity;
    saveCartToLocalStorage(cart);
  }
};

// ✅ Get All Cart Items
export const getCartItems = (): Product[] => {
  return getCartFromLocalStorage();
};
