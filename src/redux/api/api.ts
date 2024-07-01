import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const basApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (builder) => ({
    getTodo: builder.query({
      query: () => ({
        url: "/tasks",
        method: "GET",
      }),
    }),
    addTodo: builder.mutation({
      query: (data) => {
        console.log("inside the base api=>", data);
        return {
          url: "/task",
          method: "POST",

          body: data,
        };
      },
    }),
  }),
});

export const { useGetTodoQuery, useAddTodoMutation } = basApi;
