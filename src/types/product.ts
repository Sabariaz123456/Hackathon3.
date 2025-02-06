export interface Product {
  _id: string;
  name: string;
  _type: 'product';
  image?: {
    asset?: { // Made asset optional
      _ref: string;
      _type: 'image';
    };
  };
  price: number;
  description?: string;
  slug: {
    _type: 'slug';
    current: string;
  };
  stockLevel?: number; // Made optional to prevent undefined errors
}
