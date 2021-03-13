import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
  devTools: process.env.NODE_ENV !== "production",
  // preloadedState,
  // enhancers: [reduxBatch],
});

export default store;
