import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPost } from "@/interfaces/post.interface";

const postApi = createApi({
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
    fetchPosts: builder.query<IPost[], { all?: boolean; id:string  }>({
      query: ({ all, id }) => {
        const params = new URLSearchParams();
        if (all) params.append("all", String(all));
        if (id) params.append("id", String(id));
        return {
          url: `/?${params.toString()}`, // Builds the URL with dynamic query parameters
          method: "GET",
        };
      },
      transformResponse: (response: { data: IPost[] }) => response.data
    }),
    
  
    // Query for fetching a single post by ID
    fetchPostById: builder.query<IPost, string>({
      query: (id) => ({
        url: `/detail/${id}`, // Replace with your API's endpoint for fetching a specific post
        method: "GET",
      }),
    }),
  }),
});

export const { useCreatePostMutation,useFetchPostsQuery,useFetchPostByIdQuery } = postApi;
export default postApi;
