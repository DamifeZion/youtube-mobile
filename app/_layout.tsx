import "@/global.css";

import AsyncStorage from "@react-native-async-storage/async-storage";
import {
	DarkTheme,
	DefaultTheme,
	ThemeProvider,
} from "@react-navigation/native";
import { SplashScreen, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import FlashMessage from "react-native-flash-message";
import { PortalHost } from "@rn-primitives/portal";
import { useFonts } from "expo-font";
import { useTheme } from "@/hooks/shared/use-theme";
import { Provider } from "react-redux";
import { persistor, store } from "@/services/store";
import { PersistGate } from "redux-persist/integration/react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ActivityIndicator, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export { ErrorBoundary } from "expo-router";

// Prevent the splash screen from auto-hiding before getting the color scheme.
SplashScreen.preventAutoHideAsync();

const AppContent = () => {
	const inset = useSafeAreaInsets();
	const { isColorSchemeLoaded, isDarkColorScheme } = useTheme();
	const [fontsLoaded] = useFonts({
		// ROBOTO
		// "roboto-light": require("@/assets/fonts/roboto/Roboto-Light.ttf"),
		// "roboto-thin": require("@/assets/fonts/roboto/Roboto-Thin.ttf"),
		// "roboto-normal": require("@/assets/fonts/roboto/Roboto-Regular.ttf"),
		// "roboto-medium": require("@/assets/fonts/roboto/Roboto-Medium.ttf"),
		// "roboto-semibold": require("@/assets/fonts/roboto/Roboto-Bold.ttf"),
		// "roboto-bold": require("@/assets/fonts/roboto/Roboto-Black.ttf"),

		// YOUTUBE-SANS
		"youtube-light": require("@/assets/fonts/youtube-sans/YouTubeSansLight.otf"),
		"youtube-normal": require("@/assets/fonts/youtube-sans/YouTubeSansRegular.otf"),
		"youtube-medium": require("@/assets/fonts/youtube-sans/YouTubeSansMedium.otf"),
		"youtube-semibold": require("@/assets/fonts/youtube-sans/YouTubeSansSemibold.otf"),
		"youtube-bold": require("@/assets/fonts/youtube-sans/YouTubeSansBold.otf"),
		"youtube-black": require("@/assets/fonts/youtube-sans/YouTubeSansExtrabold.otf"),
	});

	// Fallback UI while fonts and theme are loading
	if (!isColorSchemeLoaded || !fontsLoaded) {
		return (
			<View className="items-center justify-center flex-1">
				<ActivityIndicator size="large" />
			</View>
		);
	}

	return (
		<ThemeProvider value={isDarkColorScheme ? DarkTheme : DefaultTheme}>
			<StatusBar style={isDarkColorScheme ? "light" : "dark"} />
			<Stack
				screenOptions={{
					headerShown: false,
				}}
			/>
			<FlashMessage
				animated
				floating
				position="top"
				statusBarHeight={inset.top}
				duration={5000}
			/>
			<PortalHost />
		</ThemeProvider>
	);
};

export default function RootLayout() {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<GestureHandlerRootView>
					<AppContent />
				</GestureHandlerRootView>
			</PersistGate>
		</Provider>
	);
}
