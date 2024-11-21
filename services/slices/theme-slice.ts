import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ThemeSliceProps = {
	theme: "dark" | "light" | "system";
	resolvedTheme: "dark" | "light";
};

const initialState: ThemeSliceProps = {
	theme: "system",
	resolvedTheme: "light",
};

const themeSlice = createSlice({
	name: "themeSlice",

	initialState,

	reducers: {
		setTheme: (state, action: PayloadAction<ThemeSliceProps["theme"]>) => {
			state.theme = action.payload;
		},

		setResolvedTheme: (
			state,
			action: PayloadAction<ThemeSliceProps["resolvedTheme"]>,
		) => {
			state.resolvedTheme = action.payload;
		},
	},
});

export const { setResolvedTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
