import { configureStore } from "@reduxjs/toolkit";
import { todoSlize } from "./todo/TodoSlize";

export const store = configureStore({
  reducer: {
    [todoSlize.name]: todoSlize.reducer,
  },
});
