import { createSlice } from "@reduxjs/toolkit";

interface ExampleState {
  example1: string;
  example2: number;
  example3: boolean;
}

const initialState: ExampleState = {
  example1: "",
  example2: 0,
  example3: true,
};

export const exampleSlice = createSlice({
  name: "example",
  initialState: { value: initialState },
  reducers: {
    test: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default exampleSlice.reducer;
