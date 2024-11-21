// hooks/useTheme.ts
import { useEffect, useState } from "react";
import { Platform } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/services/store";
import { setResolvedTheme } from "@/services/slices/theme-slice";
import { useColorScheme } from "@/lib/useColorScheme";
import { setAndroidNavigationBar } from "@/lib/android-navigation-bar";
import { SplashScreen } from "expo-router";
import { UI } from "@/lib/constants";

export const useTheme = () => {
	const { colorScheme, setColorScheme, isDarkColorScheme } = useColorScheme();
	const dispatch = useDispatch();
	const { theme, resolvedTheme } = useSelector(
		(state: RootState) => state.themeSlice,
	);
	const [isColorSchemeLoaded, setIsColorSchemeLoaded] = useState(false);

	useEffect(() => {
		(async () => {
			if (Platform.OS === "web") {
				document.documentElement.classList.add("bg-background");
			}

			// Determine resolved theme based on the selected theme
			const newResolvedTheme = theme === "system" ? colorScheme : theme;

			if (newResolvedTheme !== resolvedTheme) {
				dispatch(setResolvedTheme(newResolvedTheme));
			}

			// Only setColorScheme dynamically for system theme
			if (theme === "system") {
				setColorScheme(colorScheme);
			} else {
				setColorScheme(newResolvedTheme);
			}

			setAndroidNavigationBar(newResolvedTheme);
			setIsColorSchemeLoaded(true);
			SplashScreen.hideAsync();
		})();
	}, [theme, colorScheme, resolvedTheme, dispatch]);

	const themeColor = UI.color[resolvedTheme];
	const themeShadow = UI.shadow[resolvedTheme];

	return { isColorSchemeLoaded, isDarkColorScheme, themeColor, themeShadow };
};
