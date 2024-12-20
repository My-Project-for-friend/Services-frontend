import { createApi,  fetchBaseQuery,  } from "@reduxjs/toolkit/query/react";
import { User } from "@/interfaces/user.interface";
import { IPost } from "@/interfaces/post.interface";

const authApi=createApi({
    reducerPath: "post",
    baseQuery: fetchBaseQuery({baseUrl:`${process.env.NEXT_PUBLIC_BASE_URL}/post`}),
    endpoints: (builder)=>({
        createPost:builder.mutation({
            query:(post:IPost)=>({
                url:"/create",
                method:"POST",
                body:post
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

export const {useLoginMutation,useCreatePostMutation}=authApi;
export default authApi;