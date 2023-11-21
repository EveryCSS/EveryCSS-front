import { createSlice } from "@reduxjs/toolkit";

export const exampleSlice = createSlice({
  name: "example",
  initialState: { value: { example1: "", example2: 0, example3: true } },
  reducers: {
    test: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default exampleSlice.reducer;
