import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const booksApi = createApi({
  reducerPath: 'booksApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://strapi.cleverland.by/' }),
  endpoints: (build) => ({
    getBooks: build.query({
      query: () => `api/books`,
    }),
  }),
});
export const { useGetBooksQuery } = booksApi;