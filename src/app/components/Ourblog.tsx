// components/Whatshopping.tsx
'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Swal from 'sweetalert2';
import { allProducts } from '../../sanity/lib/queries'; // Path to queries
import { Product } from '../../types/product';// Assuming you have a type for products
import { urlFor } from '../../sanity/lib/image';// Path to urlFor utility
import { client } from '../../sanity/lib/client';
import { addToCart } from '../../app/actions/actions';

const Whatshopping = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Fetch products dynamically on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await client.fetch(allProducts); // Fetch data from Sanity
        setProducts(fetchedProducts); // Update state with fetched data
      } catch (error) {
        console.error("Error fetching products:", error); // ✅ Now 'error' is used
        setError('Error fetching products. Please try again later.'); // Set error state if fetching fails
      }
    };

    fetchProducts();
  }, []); // Empty array ensures this runs once when the component mounts

  // Handle adding to cart
  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault(); // Prevent default link navigation

    Swal.fire({
      position: 'top-right',
      icon: 'success',
      title: `${product.name} added to cart`,
      showConfirmButton: false,
      timer: 1000,
    });

    addToCart(product); // Assuming addToCart adds product to some global state or cart
  };

  if (error) {
    return <div className="text-center text-red-500">{error}</div>; // Show error message if fetching fails
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.length === 0 ? (
          <div className="col-span-full text-center text-gray-500">No products available</div>
        ) : (
          products.map((product) => (
            <div
              key={product._id}
              className="border rounded-lg shadow-lg p-4 hover:shadow-xl transition duration-300"
            >
              <Link href={`/Cart/${product.slug?.current}`} passHref>
                <div>
                  {product.image && (
                    <Image
                      src={urlFor(product.image).url()} // Get the image URL using urlFor
                      alt={product.name || 'Product Image'}
                      width={200}
                      height={200}
                      className="w-full h-auto object-cover rounded-md"
                    />
                  )}
                  <h3 className="mt-4 text-lg font-semibold text-gray-800">
                    {product.name}
                  </h3>
                  {product.price && (
                    <p className="text-gray-600 mt-2">Price: ${product.price}</p>
                  )}
                </div>
              </Link>
              <button
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out mt-4 w-full"
                onClick={(e) => handleAddToCart(e, product)}
              >
                Add To Cart
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Whatshopping;

