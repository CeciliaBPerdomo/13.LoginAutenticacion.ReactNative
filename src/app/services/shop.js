import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const shopApi = createApi({
   reducerPath: "shopApi",
   baseQuery: fetchBaseQuery({ baseUrl: "https://coder-reactnative-default-rtdb.firebaseio.com" }),
   endpoints: (builder) => ({
      // Metodos que voy a usar
      getProducts: builder.query({
         query: () => "/productos.json"
      }),
      getCategories: builder.query({
         query: () => "/categories.json"
      }),
   })
})

export const { useGetProductsQuery, useGetCategoriesQuery } = shopApi

// useGetProductsQuery --> Porque es get, si es post es mutation