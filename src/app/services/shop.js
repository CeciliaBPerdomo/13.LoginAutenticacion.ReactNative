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

      getProductsByCategories: builder.query({
         query: (category) =>  `/productos.json?orderBy="category"&equalTo="${category}"`,
         transformResponse: (response) => {
            const data = Object.values(response) // Lo convierte en un array
            return data
         }
      }),

      getProductById: builder.query({
         query: (id) => `/productos/${id}.json` 
      })
   })
})

export const { useGetProductsQuery, useGetCategoriesQuery, useGetProductsByCategoriesQuery, useGetProductByIdQuery } = shopApi

// useGetProductsQuery --> Porque es get, si es post es mutation