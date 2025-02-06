// pages/Cart/[slug].tsx
'use client';
import React from 'react';
import Image from 'next/image';
import { GetServerSideProps } from 'next';
import { client } from '../../sanity/client';
import { urlFor } from '../../sanity/lib/image';
import { Product } from '../../types/product'; // Adjust the path if needed

// Fetch the product data based on the slug
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.params!;

  // Fetch the product using the slug
  const productQuery = `
    [_type == "product" && slug.current == $slug][0] {
      _id,string;
      name,string;
      price,number
      slug,number
      image {
        asset->{
          _id,
          url
        }
      },
      description
    }
  `;
  const product = await client.fetch(productQuery, { slug });

  if (!product) {
    return {
      notFound: true, // If no product is found, return 404
    };
  }

  return {
    props: {
      product,
    },
  };
};

type ProductPageProps = {
  product: Product;
};

const ProductPage: React.FC<ProductPageProps> = ({ product }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">{product.name}</h1>
      {product.image && (
        <Image
          src={urlFor(product.image).url()}
          alt={product.name || 'Product Image'}
          className="w-full h-auto object-cover rounded-md"
        />
      )}
      <div className="mt-4">
        <p className="text-lg text-gray-800">Price: ${product.price}</p>
        <p className="mt-4">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductPage;
