import { configureStore } from "@reduxjs/toolkit";
import { articleApi } from "./article";

export const store = configureStore({
    reducer: { // allows to slice/grab only what we need
        [articleApi.reducerPath]: articleApi.reducer
    }, 
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articleApi.middleware)
});

// 1. we configure a store = global state that saves the entire info about our aplication
// 2. we grab only what we need from the store with reducer - in this case, articleApi so we add it to reducer path and middleware