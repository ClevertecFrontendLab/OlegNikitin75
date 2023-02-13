import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const booksApi = createApi({
  reducerPath: 'booksApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://strapi.cleverland.by/' }),
  endpoints: (build) => ({
    getBooks: build.query({
      query: () => `api/books`,
    }),
    getCategories: build.query({
      query: () => `api/categories`,
    }),
    getBook: build.query({
      query: (id) => `api/books/${id}`,
    }),
  }),
});
export const { useGetBooksQuery, useGetCategoriesQuery, useGetBookQuery } = booksApi;
