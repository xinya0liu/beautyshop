import  {PRODUCTS_RUL}  from "../constants";
import { apiSlice } from "./apiSlice";

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: PRODUCTS_RUL,
      }),
      keepUnusedDataFor: 5,
    }),
    getProductsDetails: builder.query({
      query: (productId) => ({
        url: `${PRODUCTS_RUL}/${productId}`,
      }),
      keepUnusedDataFor: 5,
    })
  }),
});
export const { useGetProductsQuery,useGetProductsDetailsQuery } = productsApiSlice;