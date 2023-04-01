import { configureStore } from "@reduxjs/toolkit";
import filter from "./slices/filterSlice";
import cart from "../redux/slices/cartSlice";
const store = configureStore({
  reducer: {
    filter,
    cart,
  },
});
export default store;
