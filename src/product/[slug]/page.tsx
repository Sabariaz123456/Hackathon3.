import React from 'react';
import Image from 'next/image';
import { GetServerSideProps } from 'next';
import { client } from '../../sanity/lib/client';
import { urlFor } from '../../sanity/lib/image';
import { Product } from '../../types/product'; // Adjust the path if needed

// Fetch the product data based on the slug
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (!params?.slug) {
    return { notFound: true }; // Ensure slug is provided
  }

  try {
    const productQuery = `
      *[_type == "product" && slug.current == $slug][0] {
        _id,
        name,
        price,
        slug,
        image {
          asset->{
            _id,
            url
          }
        },
        description
      }
    `;

    const product = await client.fetch(productQuery, { slug: params.slug });

    if (!product) {
      return { notFound: true }; // Return 404 if product is not found
    }

    return { props: { product } };
  } catch (error) {
    console.error("Error fetching product:", error);
    return { notFound: true };
  }
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
          width={400} // Set width
          height={400} // Set height
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
