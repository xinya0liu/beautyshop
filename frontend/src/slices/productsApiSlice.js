

import  {PRODUCTS_RUL, UPLOAD_URL}  from "../constants";
import { apiSlice } from "./apiSlice";

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({keyword,pageNumber}) => ({
        url: PRODUCTS_RUL,
        params: {
          keyword,
          pageNumber},
      }),
      providesTags: ['Product'],
      keepUnusedDataFor: 5,
    }),
    getProductsDetails: builder.query({
      query: (productId) => ({
        url: `${PRODUCTS_RUL}/${productId}`,
      }),
      keepUnusedDataFor: 5,
      providesTags: ['Products'],
    }),
    createProduct: builder.mutation({
      query: () => ({
        url: PRODUCTS_RUL,
        method: 'POST',
      
      }),
      invalidatesTags: ['Product'],
    }),

    updateProduct : builder.mutation({
      query: (data) => ({
        url: `${PRODUCTS_RUL}/${data.productId}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Products'],
    }),


  uploadProductImage: builder.mutation({
    query: (data) => ({
      url: `${UPLOAD_URL}`,
      method: 'POST',
      body: data,
    }),
    }),

    deleteProduct: builder.mutation({
      query: (productId) => ({
        url: `${PRODUCTS_RUL}/${productId}`,
        method: 'DELETE',
      }),
    }),
    createReview: builder.mutation({
      query: (data) => ({
        url: `${PRODUCTS_RUL}/${data.productId}/reviews`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Product'],
    }),
    getTopProducts: builder.query({
      query: () => ({
        url: `${PRODUCTS_RUL}/top`,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});
export const { useGetProductsQuery,
  useGetProductsDetailsQuery, 
  useCreateProductMutation,
  useUpdateProductMutation,
  useUploadProductImageMutation,
  useDeleteProductMutation,
  useCreateReviewMutation,
useGetTopProductsQuery} = productsApiSlice;