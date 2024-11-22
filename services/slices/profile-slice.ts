import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { showMessage } from "react-native-flash-message";

type ProfileSliceT = {
	channelSubscriptions: Array<string>;
};

const initialState: ProfileSliceT = {
	channelSubscriptions: [],
};

const profileSlice = createSlice({
	name: "profileSlice",
	initialState,
	reducers: {
		subscribeChannel: (state, action: PayloadAction<string>) => {
			state.channelSubscriptions.push(action.payload);
		},
		unSubscribeChannel: (state, action: PayloadAction<string>) => {
			const existingSubscription = state.channelSubscriptions.includes(
				action.payload,
			);

			if (!existingSubscription) {
				showMessage({
					message: "Cannot unsubscibe because you are not subscribed",
					type: "danger",
				});
			} else {
				state.channelSubscriptions = state.channelSubscriptions.filter(
					(item) => item !== action.payload,
				);
			}
		},
		toggleChannelSubscriptions: (state, action: PayloadAction<string>) => {
			const selectedChannel = action.payload;
			const existingSubscription =
				state.channelSubscriptions.includes(selectedChannel);

			if (existingSubscription) {
				state.channelSubscriptions = state.channelSubscriptions.filter(
					(item) => item !== selectedChannel,
				);
			} else {
				state.channelSubscriptions.push(selectedChannel);
			}
		},
	},
});

export const {subscribeChannel, toggleChannelSubscriptions, unSubscribeChannel} = profileSlice.actions;
export default profileSlice.reducer;
