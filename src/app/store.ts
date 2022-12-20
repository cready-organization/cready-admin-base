import { configureStore } from "@reduxjs/toolkit";
import globalSlice from "src/redux/global/globalSlice";

export const store = configureStore({
  reducer: {
    global: globalSlice,
  },
});
