export interface Product {
  id: string;
  created_at: string;
  updated_at: string;
  productName: string;
  priceDefault: number;
  promotionalPrice: number;
  retailPrice: number;
  wholesalePrice: number;
  importPrice: number;
  abv: number;
  weight: number;
  description: string;
  isOutstanding: boolean;
  quantity: number;
  barcode: null;
  unit: null;
  grapeType: null;
  brand: null;
  imageUrl: {
    id: string;
    created_at: string;
    updated_at: string;
    imageUrl: string;
    type: string;
  }[];
  wineType: null;
  productTags: null;
}
