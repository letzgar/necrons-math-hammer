import { configureStore } from '@reduxjs/toolkit';
import ModelsReducer from "../features/Models/Models";

export const store = configureStore({
  reducer: {
    models: ModelsReducer,
  },
});
