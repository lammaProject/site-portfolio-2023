import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const slice = createSlice({
  name: "slice",
  initialState,
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setValue } = slice.actions;
