import { Text } from "@/components/ui/text";
import { useTheme } from "@/hooks/shared/use-theme";
import { UI } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { router, Tabs, usePathname } from "expo-router";
import { View } from "react-native";
import MySVG from "@/components/ui/svg";
import {
	HOME_OUTLINE,
	HOME_SOLID,
	SHORTS_OUTLINE,
	CREATE_VIDEO,
	SUBSCRIPTION_OUTLINE,
	SUBSCRIPTION_SOLID,
	LIBRARY_OUTLINE,
	LIBRARY_SOLID,
} from "@/assets/icons/icons";
import useNavigateHomeOnBack from "@/hooks/shared/use-navigate-home-on-back";
import { Button } from "@/components/ui/button";

const TabsLayout = () => {
	const pathname = usePathname();
	const isShortsPage = pathname === "/shorts";
	const { themeColor, themeShadow } = useTheme();

	const viewClassName = (focused: boolean, className?: string) => {
		return cn(
			"w-full h-full items-center justify-center text-xs gap-1",
			{
				"": focused,
			},
			className,
		);
	};

	const textClassName = (focused: boolean, className?: string) => {
		return cn(
			"text-sm leading-tight text-muted-foreground",
			{
				"text-primary": focused,
				"text-white": isShortsPage
			},
			className,
		);
	};

	const iconColor = (focused: boolean) => isShortsPage ? themeColor.white : focused ? themeColor.foreground : themeColor.muted_foreground

	useNavigateHomeOnBack(pathname, ["shorts", "create-video"]);

	return (
		<Tabs
			screenOptions={{
				headerShown: false,
				tabBarShowLabel: false,
				tabBarStyle: {
					height: UI.layout.tabBarHeight,
					backgroundColor: !isShortsPage ? themeColor.background : UI.color.dark.background,
					...themeShadow.sm,
				},
				tabBarIconStyle: {
					flex: 1,
					width: "100%",
				},
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					tabBarIcon: ({ focused }) => (
						<View className={viewClassName(focused)}>
							<MySVG
								name={focused ? HOME_SOLID : HOME_OUTLINE}
								color={iconColor(focused)}
								size={20}
							/>

							<Text className={textClassName(focused)}>Home</Text>
						</View>
					),
				}}
			/>

			<Tabs.Screen
				name="shorts"
				options={{
					tabBarIcon: ({ focused }) => (
						<View className={viewClassName(focused)}>
							<View className="-mt-1.5">
								<MySVG
									name={SHORTS_OUTLINE}
									color={iconColor(focused)}
									fill="#000"
									size={30}
								/>
							</View>

							<Text className={textClassName(focused, "-mt-1.5")}>
								Shorts
							</Text>
						</View>
					),
				}}
			/>

			<Tabs.Screen
				name="create-video"
				options={{
					tabBarStyle: {
						display: "none",
					},
					tabBarIcon: ({ focused }) => (
						<View className={viewClassName(focused)}>
							<Button
								onPress={() => router.push("/(tabs)/create-video")}
								className={cn("rounded-full native:w-12 native:h-12 bg-black/10 dark:bg-background", {
									"bg-white/10": isShortsPage
								})}
							>
								<MySVG
									name={CREATE_VIDEO}
									color={isShortsPage ? themeColor.white : themeColor.foreground}
									size={18}
								/>
							</Button>
						</View>
					),
				}}
			/>

			<Tabs.Screen
				name="subscription"
				options={{
					tabBarIcon: ({ focused }) => (
						<View className={viewClassName(focused)}>
							<MySVG
								name={
									focused ? SUBSCRIPTION_SOLID : SUBSCRIPTION_OUTLINE
								}
								color={iconColor(focused)}
							/>

							<Text className={textClassName(focused)}>
								Subscription
							</Text>
						</View>
					),
				}}
			/>

			<Tabs.Screen
				name="library"
				options={{
					tabBarIcon: ({ focused }) => (
						<View className={viewClassName(focused)}>
							<MySVG
								name={focused ? LIBRARY_SOLID : LIBRARY_OUTLINE}
								color={iconColor(focused)}
							/>
							<Text className={textClassName(focused)}>Library</Text>
						</View>
					),
				}}
			/>
		</Tabs>
	);
};

export default TabsLayout;
