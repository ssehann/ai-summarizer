import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;

export const articleApi = createApi({ 
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({
        // set up GET request with base url and headers (api key and host)
        baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders: (headers) => {
            headers.set('x-rapidapi-key', rapidApiKey);
            headers.set('x-rapidapi-host', 'article-extractor-and-summarizer.p.rapidapi.com');

            return headers;
        },
    }),
    endpoints: (builder) => ({ 
        // create endpoint with specific query parameters
            // url (req): of the article, make sure to encodeURIComponent to ignore special characters in the url from user
            // length (optional): how many paragraphs
        
        getSummary: builder.query({ 
            query: (params) => `summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`,
        }),
    }),
});

export const { useLazyGetSummaryQuery } = articleApi;