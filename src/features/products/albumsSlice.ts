import { apiSlice } from "../../api/apiSlice";
import { Product, ExtraResponse } from "../../types";

interface ProductsResponse {
  products: Product[];
  options: ExtraResponse;
}

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => "/products",
      transformResponse: (response: ProductsResponse) => response.products,
    }),
    getProductById: builder.query<Product[], number>({
      query: (id: number) => `products/${id}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = usersApiSlice;
