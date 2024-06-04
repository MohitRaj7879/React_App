import { createSlice } from "@reduxjs/toolkit";

const ThemeSlice = createSlice({
  name: "theme",
  initialState: { theme: "light" },
  reducers: {
    toggleTheme(state, action) {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
});

export default ThemeSlice.reducer;
export const { toggleTheme } = ThemeSlice.actions;
