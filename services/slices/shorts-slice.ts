import { ShortVideoType } from "@/components/shorts/shorts-video";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { showMessage } from "react-native-flash-message";

type ShortsSliceT = {
	activeShort: string;
	shortData: Array<ShortVideoType>;
	likedShorts: Array<string>;
	dislikedShorts: Array<string>;
	comments: Array<{
		shortId: string;
		id: string;
		comment: string;
	}>;
};

const initialState: ShortsSliceT = {
	activeShort: "",
	shortData: [],
	likedShorts: [],
	dislikedShorts: [],
	comments: [],
};

export const shortsSlice = createSlice({
	name: "shortsSlice",

	initialState,

	reducers: {
		setActiveShort: (state, action) => {
			state.activeShort = action.payload;
		},
		setShortData: (state, action) => {
			state.shortData = action.payload;
		},
		toggleShortLike: (state, action: PayloadAction<string>) => {
			const selectedShortId = action.payload;

			// Check if the short is already liked
			const isLiked = state.likedShorts.includes(selectedShortId);

			// Find the short
			const existingShort = state.shortData.find(
				(item) => item.id === selectedShortId,
			);
			if (!existingShort) {
				showMessage({
					message: "Short cannot be liked because it does not exist.",
					type: "danger",
				});
				return;
			}

			if (isLiked) {
				// Unlike: Remove from likedShorts
				state.likedShorts = state.likedShorts.filter(
					(item) => item !== selectedShortId,
				);
				existingShort.statistics.likes -= 1;
			} else {
				// Check if it is disliked and remove it, before liking
				const isDisliked = state.dislikedShorts.includes(selectedShortId);
				if (isDisliked) {
					state.dislikedShorts = state.dislikedShorts.filter(
						(item) => item !== selectedShortId,
					);
				}
				// Like: Add to likedShorts
				state.likedShorts.push(selectedShortId);
				existingShort.statistics.likes += 1;
			}
		},
		toggleShortDisLike: (state, action: PayloadAction<string>) => {
			const selectedShortId = action.payload;

			// Check if the short is already disliked
			const isDisliked = state.dislikedShorts.includes(selectedShortId);

			// Find the short
			const existingShort = state.shortData.find(
				(item) => item.id === selectedShortId,
			);
			if (!existingShort) {
				showMessage({
					message: "Short cannot be disliked because it does not exist.",
					type: "danger",
				});
				return;
			}

			if (isDisliked) {
				// Remove from dislikedShorts
				state.dislikedShorts = state.dislikedShorts.filter(
					(item) => item !== selectedShortId,
				);
				existingShort.statistics.dislikes -= 1;
			} else {
				// Check if it is liked and remove it, before disliking
				const isLiked = state.likedShorts.includes(selectedShortId);
				if (isLiked) {
					state.likedShorts = state.likedShorts.filter(
						(item) => item !== selectedShortId,
					);
				}
				// Dislike: Add to dislikedShorts
				state.dislikedShorts.push(selectedShortId);
				existingShort.statistics.likes += 1;
			}
		},
		setChannelSubscriptions: () => {

		},
	},
});

export const {
	setActiveShort,
	setShortData,
	toggleShortLike,
	toggleShortDisLike,
} = shortsSlice.actions;
export default shortsSlice.reducer;
