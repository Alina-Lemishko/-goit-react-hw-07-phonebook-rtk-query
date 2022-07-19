import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { nanoid } from 'nanoid';

// export interface Post {
//   id: string
//   name: string
// }

// type PostsResponse = Post[]

export const apiContacts = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://62d51c8ed4406e52355311b5.mockapi.io/api/v1/',
  }),
  tagTypes: ['contacts'],
  endpoints: build => ({
    addContacts: build.mutation({
      query: contacts => ({
        url: `/contacts`,
        method: 'POST',
        body: contacts,
      }),
      invalidatesTags: ['contacts'],
    }),
    getContacts: build.query({
      query: () => `/contacts`,
      providesTags: ['contacts'],
    }),

    deleteContact: build.mutation({
      query(id) {
        return {
          url: `/contacts/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: ['contacts'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactsMutation,
  useDeleteContactMutation,
} = apiContacts;
