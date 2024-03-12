import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

  export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',  //name of api reducerpath
    baseQuery: fetchBaseQuery({
      baseUrl: 'https://shazam.p.rapidapi.com/',
      prepareHeaders: (headers) => {
        headers.set('X-RapidAPI-Key', '8fb79a2dccmshfe1388b080d3cd5p1adf48jsnd3f84b19f905');

        return headers;
      },
    }),
  endpoints: (builder) => ({
        getCharts: builder.query({query: () => '/songs/v2/get-details'}),
  }),
  });

  export const {
    useGetChartsQuery,
  } = shazamCoreApi;

//   const url = 'https://shazam.p.rapidapi.com/songs/v2/get-details?id=1217912247&l=en-US';
       // getCharts: builder.query({query: () => '/charts/list'}),
       