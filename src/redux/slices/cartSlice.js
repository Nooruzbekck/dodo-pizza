import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  items: [],
};

const cartSlice = createSlice({
  name: "filters",
  initialState: initialState,
  reducers: {
    addProduct(state, action) {
      const findItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
    minusItem(state, action) {
      const findItem = (state.items = state.items.filter(
        (item) => item.id === action.payload
      ));
      if (findItem) {
        findItem.count--;
      }
    },

    removeItem(state, action) {
      state.items = state.items.filter((item) => item.id === action.payload);
    },
    clearItems(state) {
      state.items = [];
    },
  },
});

export const { addProduct, removeItem, clearItems, minusItem } =
  cartSlice.actions;

export default cartSlice.reducer;
