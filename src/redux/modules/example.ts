import { createSlice } from "@reduxjs/toolkit";

interface ExampleState {
  name: string;
  age: number;
  isGrey: boolean;
}

const initialState: ExampleState = {
  name: "Anon",
  age: 10,
  isGrey: false,
};

export const exampleSlice = createSlice({
  name: "example",
  initialState: { value: initialState },
  reducers: {
    plusAge: (state) => {
      state.value.age++;
    },
    minusAge: (state) => {
      state.value.age--;
    },
    setName: (state, action) => {
      state.value.name = action.payload.name;
    },
    setIsGrey: (state) => {
      state.value.isGrey = !state.value.isGrey;
    },
  },
});

export const reduces = exampleSlice.actions;

export default exampleSlice.reducer;
