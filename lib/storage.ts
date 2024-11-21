import { Storage } from "redux-persist";
import { MMKV } from "react-native-mmkv";

const mmkvInstance = new MMKV();

const MMKVStorage: Storage = {
	setItem: (key, value) => {
		mmkvInstance.set(key, value);
		return Promise.resolve(true);
	},
	getItem: (key) => {
		const value = mmkvInstance.getString(key);
		return Promise.resolve(value);
	},
	removeItem: (key) => {
		mmkvInstance.delete(key);
		return Promise.resolve(true);
	},
};

export default MMKVStorage;
