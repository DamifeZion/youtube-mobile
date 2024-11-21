import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
// STORAGE OPTIONS
import AsyncStorage from "@react-native-async-storage/async-storage";
import MMKVStorage from "@/lib/storage";
// SLICES
import themeSlice from "./slices/theme-slice";
import userSlice from "./slices/user-slice";

// Our preffered storage is MMKV Storage
// MMKV cant be used in expo go environment, so we default to Async Storage to use expo go, and MMKV for production.

const persistConfig = {
	key: "root",
	// Development Build Storage
	// storage: MMKVStorage,

	// EXPO GO Storage
	storage: AsyncStorage,
	whitelist: ["themeSlice", "userSlice"],
};

const rootReducer = combineReducers({
	themeSlice,
	userSlice,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
