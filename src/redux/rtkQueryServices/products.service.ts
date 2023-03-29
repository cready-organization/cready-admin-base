// Need to use the React-specific entry point to import createApi
import { createApi } from '@reduxjs/toolkit/query/react';

import { Product } from 'types/product.type';
import axiosBaseQuery from 'services/axiosBaseQuery';

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({ query: () => ({ url: 'products', method: 'get' }) }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetProductsQuery } = productApi;
