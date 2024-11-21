import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserSliceProps = {
	user: {
		email: string;
		password: string;
		token: string;
	};
};

const initialState: UserSliceProps = {
	user: {
		email: "",
		password: "",
		token: "",
	},
};

export const userSlice = createSlice({
	name: "userSlice",
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<UserSliceProps["user"]>) => {
			state.user = action.payload;
		},
	},
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
