import {
	Image,
	LayoutChangeEvent,
	StyleProp,
	Text,
	View,
	ViewStyle,
} from "react-native";
import * as React from "react";
import { cn } from "@/lib/utils";
import { StatusBar, StatusBarStyle } from "expo-status-bar";
import { useTheme } from "@/hooks/shared/use-theme";
import { useSelector } from "react-redux";
import { RootState } from "@/services/store";
import { usePathname } from "expo-router";
import SVG from "../ui/svg";
import { NOTIFICATION, SCREEN_CAST, SEARCH } from "@/assets/icons/icons";
import { UI } from "@/lib/constants";
import { Button } from "../ui/button";
import LucideIcon from "../ui/lucide-icon";

type HeaderProps = {
	style?: StyleProp<ViewStyle>;
	className?: string;
	hideLeftSection?: boolean;
	leftSectionContent?: React.ReactNode;
	hideStatusBar?: boolean;
	rightSectionClassName?: string;
	statusBarBackgroundColor?: string;
	statusBarStyle?: StatusBarStyle;
	hideStatusBarComponent?: boolean;
	onLayout?: (e: LayoutChangeEvent) => void;
};

export const Header: React.FC<HeaderProps> = ({
	hideStatusBarComponent,
	style,
	className,
	hideLeftSection,
	leftSectionContent,
	hideStatusBar,
	rightSectionClassName,
	statusBarBackgroundColor,
	statusBarStyle,
	onLayout,
}) => {
	const pathname = usePathname();
	const isShortsPage = pathname === "/shorts";

	const { themeColor } = useTheme();
	const { resolvedTheme } = useSelector(
		(state: RootState) => state.themeSlice,
	);

	return (
		<View
			style={style}
			onLayout={onLayout}
			className={cn(
				"px-containerHorizontal pt-safe pb-2 flex-row items-center justify-between bg-background",
				className,
			)}
		>
			{!hideStatusBarComponent && (
				<StatusBar
					hidden={hideStatusBar}
					style={statusBarStyle}

					backgroundColor={
						isShortsPage
							? "transparent"
							: statusBarBackgroundColor
								? statusBarBackgroundColor
								: resolvedTheme === "dark"
									? UI.adjustOpacity(themeColor.background, 0.5)
									: themeColor.background
					}
				/>
			)}

			{/* Left Section */}
			{!hideLeftSection && (
				<>
					{leftSectionContent ? (
						leftSectionContent
					) : (
						<View className="flex-row gap-0.5 item-center">
							<Image
								source={require("../../assets/images/logo-play.png")}
								className="w-9 h-9"
							/>

							<Text className="text-2xl -tracking-widest text-foreground font-body-semibold">
								YouTube
							</Text>
						</View>
					)}
				</>
			)}

			{/* Right Section */}
			<View
				className={cn(
					"flex-row ml-auto items-center",
					rightSectionClassName,
				)}
			>
				{pathname !== "/shorts" && (
					<>
						<Button
							size="icon"
							variant="ghost"
							className="rounded-full native:h-14 native:w-14"
						>
							<SVG name={SCREEN_CAST} color={themeColor.foreground} />
						</Button>

						<Button
							size="icon"
							variant="ghost"
							className="relative rounded-full native:h-14 native:w-14"
						>
							<SVG name={NOTIFICATION} color={themeColor.foreground} />

							<Text className="absolute top-[13px] right-0.5 text-xs rounded-full px-[6.2px] py-0.5 bg-destructive text-destructive-foreground">
								9+
							</Text>
						</Button>
					</>
				)}

				<Button
					size="icon"
					variant="ghost"
					className={cn("rounded-full native:h-14 native:w-14", {
						"active:bg-white/5": pathname === "/shorts"
					})}
				>
					<SVG
						name={SEARCH}
						color={pathname === "/shorts" ? themeColor.white : themeColor.foreground}
					/>
				</Button>

				{pathname === "/shorts" && (
					<Button
						size="icon"
						variant="ghost"
						className={cn("rounded-full native:h-14 native:w-14", {
							"active:bg-muted/5": pathname === "/shorts"
						})}
					>
						<LucideIcon
							name="EllipsisVertical"
							className={cn("text-foreground", {
								"text-white": pathname === "/shorts"
							})}
						/>
					</Button>
				)}
			</View>
		</View>
	);
};
