import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const basApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (builder) => ({
    getTodo: builder.query({
      query: () => ({
        url: "/tasks", // Corrected URL to match your endpoint
        method: "GET",
      }),
    }),
  }),
});

export const { useGetTodoQuery } = basApi;
