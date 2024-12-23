import { createApi,  fetchBaseQuery,  } from "@reduxjs/toolkit/query/react";
import { User } from "@/interfaces/user.interface";

const authApi=createApi({
    reducerPath: "auth",
    baseQuery: fetchBaseQuery({baseUrl:`${process.env.NEXT_PUBLIC_BASE_URL}/auth`}),
    endpoints: (builder)=>({
        register:builder.mutation({
            query:(user:User)=>({
                url:"/register",
                method:"POST",
                body:user
            }),

        }),
        login:builder.mutation({
            query:(user:User)=>({
                url:"/login",
                method:"POST",
                body:user
            }),

        })
    })
    
})

export const {useLoginMutation,useRegisterMutation}=authApi;
export default authApi;