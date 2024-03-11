import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://identitytoolkit.googleapis.com/v1/" }),
    endpoints: (builder) => ({
        // Para registrar usuarios
        register: builder.mutation({
            query: (user) => ({
                url: "accounts:signUp?key=AIzaSyAp_Y0QqKdB8LqLGFcYkikRo_OJimVsNxQ",
                method: "POST",
                body: user
            })
        }),

        // Para iniciar sesion
        login: builder.mutation({
            query: (user) => ({
                url: "accounts:signInWithPassword?key=AIzaSyAp_Y0QqKdB8LqLGFcYkikRo_OJimVsNxQ",
                method: "POST",
                body: user
            })
        })
    })
})

export const { useRegisterMutation, useLoginMutation } = authApi