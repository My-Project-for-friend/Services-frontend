import { createApi,  fetchBaseQuery,  } from "@reduxjs/toolkit/query/react";
import { User } from "@/interfaces/user.interface";
const BASE_URL = "http://localhost:5000/api";

const authApi=createApi({
    reducerPath: "auth",
    baseQuery: fetchBaseQuery({baseUrl:`${BASE_URL}/auth`}),
    endpoints: (builder)=>({
        register:builder.mutation({
            query:(user:User)=>({
                url:"/regitser",
                method:"POST",
                body:user
            })
        }),
        login:builder.mutation({
            query:(user:User)=>({
                url:"/login",
                method:"POST",
                body:user
            })
        })
    })
    
})

export const {useLoginMutation,useRegisterMutation}=authApi;
export default authApi;