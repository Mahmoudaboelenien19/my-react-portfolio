import { createSlice } from "@reduxjs/toolkit";

const cursorSlice = createSlice({
  name: "cursor",
  initialState: {
    scale: 1,
  },
  reducers: {
    updateCursorScale: (state, action) => {
      state.scale = action.payload;
    },
  },
});

export default cursorSlice.reducer;
export const { updateCursorScale } = cursorSlice.actions;
