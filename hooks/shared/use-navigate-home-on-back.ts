import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";
import { BackHandler, Platform, NativeEventSubscription } from "react-native";
import { useRouter } from "expo-router";

/**
 * A custom hook that ensures navigation back to the home screen
 * if the current page matches specified conditions.
 *
 * @param currentScreen - The name of the current screen.
 * @param targetScreens - An array of screen names that require this behavior.
 */
const useNavigateHomeOnBack = (
	currentScreen: string,
	targetScreens: string[],
) => {
	const router = useRouter();

	useFocusEffect(
		useCallback(() => {
			const backAction = () => {
				if (targetScreens.includes(currentScreen)) {
					router.replace("/(tabs)"); // Navigate back to Home
					return true; // Prevent default back action
				}
				return false; // Allow default behavior for other screens
			};

			let subscription: NativeEventSubscription | undefined;

			// Add event listener for hardware back button on Android
			if (Platform.OS === "android") {
				subscription = BackHandler.addEventListener(
					"hardwareBackPress",
					backAction,
				);
			}

			return () => {
				subscription?.remove();
			};
		}, [currentScreen, targetScreens, router]),
	);
};

export default useNavigateHomeOnBack;
