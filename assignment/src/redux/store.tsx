


// // src/redux/store.ts
// import { configureStore } from '@reduxjs/toolkit';
// import contentReducer from './contentSlice';

// export const Store = configureStore({
//   reducer: {
//     content: contentReducer,
//   },
// });

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof Store.getState>;
// export type AppDispatch = typeof Store.dispatch;


// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import contentReducer from './contentSlice';

export const Store = configureStore({
  reducer: {
    content: contentReducer,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
