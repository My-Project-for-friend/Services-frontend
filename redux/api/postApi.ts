import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPost } from "@/interfaces/post.interface";

const authApi = createApi({
  reducerPath: "post",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/post`,
    prepareHeaders: (headers) => {
      // Example: Retrieve a token from your Redux store or localStorage
      const token =  localStorage.getItem("token");
      
      if (token) {
        headers.set("Authorization", `Bearer ${token}`); // Add Authorization header
      }
      
      headers.set("Content-Type", "application/json"); // Set Content-Type header
      return headers;
    },
  }),
  endpoints: (builder) => ({
    createPost: builder.mutation({
      query: (post: IPost) => ({
        url: "/create",
        method: "POST",
        body: post,
      }),
    }),
  }),
});

export const { useCreatePostMutation } = authApi;
export default authApi;
