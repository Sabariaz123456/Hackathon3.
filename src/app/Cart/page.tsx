'use client';

import { Product } from '../../types/product';
import React, { useEffect, useState } from 'react';
import { getCartItems, removeFromCart, updateCartQuantity } from '../../app/actions/actions';
import Swal from 'sweetalert2';
import Image from 'next/image';
import { urlFor } from '../../sanity/lib/image';

const Cart = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    const items = getCartItems();
    setCartItems(items);
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, remove it!',
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItems(getCartItems()); // Re-fetch the cart items after removal
        Swal.fire('Deleted!', 'Item has been removed.', 'success');
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
    setCartItems(getCartItems()); // Re-fetch after quantity update
  };

  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product) {
      handleQuantityChange(id, (product.stockLevel || 0) + 1); // Ensure stockLevel defaults to 0 if undefined
    }
  };
  
  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product && product.stockLevel != null && product.stockLevel > 1) {
      // stockLevel is guaranteed to be a number at this point
      handleQuantityChange(id, product.stockLevel - 1);
    }
  };
  
  const calculatedTotal = () => {
    return cartItems.reduce(
      (total, item) => total + (Number(item.price) * (item.stockLevel || 1)), // Default to 1 if stockLevel is undefined
      0
    );
  };

  const handleProceed = () => {
    Swal.fire({
      title: 'Proceed to checkout?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, proceed!',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Success', 'Your order has been successfully processed', 'success');
        setCartItems([]); // Clear the cart state
        localStorage.setItem('cart', '[]'); // Clear cart in localStorage as well
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
        {cartItems.length > 0 ? (
          <>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item._id} className="flex items-center justify-between border-b pb-4">
                  <div className="flex items-center space-x-4">
                    {item.image?.asset?._ref ? (
                      <Image
                        src={urlFor(item.image).url() || '/default-product.png'} // Fallback to default image
                        className="w-16 h-16 object-cover rounded-lg"
                        alt={item.name || 'Product Image'}
                        width={500}
                        height={500}
                      />
                    ) : (
                      <Image
                        src="/default-product.png" // Default image if no image provided
                        className="w-16 h-16 object-cover rounded-lg"
                        alt="Default Product"
                        width={500}
                        height={500}
                      />
                    )}
                    <div>
                      <h2 className="font-semibold">{item.name}</h2>
                      <p className="text-sm text-gray-500">Price: ${Number(item.price).toFixed(2)}</p>
                      <p className="text-sm text-gray-500">Stock Level: {item.stockLevel}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      onClick={() => handleDecrement(item._id)}
                    >
                      -
                    </button>
                    <span className="px-2">{item.stockLevel}</span>
                    <button
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      onClick={() => handleIncrement(item._id)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    onClick={() => handleRemove(item._id)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <h2 className="text-xl font-bold">Total: ${calculatedTotal().toFixed(2)}</h2>
              <button
                className="w-full mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={handleProceed}
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        ) : (
          <div className="text-center py-6">
            <p className="text-lg font-semibold">Your cart is empty!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
