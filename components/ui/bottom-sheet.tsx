import * as React from "react";
import GorhomBottomSheet from "@gorhom/bottom-sheet";
import { useTheme } from "@/hooks/shared/use-theme";
import { GestureHandlerRootView } from "react-native-gesture-handler";

type BottomSheetProps = React.ComponentProps<typeof GorhomBottomSheet> & {
	showIndicator?: boolean;
};

export const MyBottomSheet = React.forwardRef<
	GorhomBottomSheet,
	BottomSheetProps
>(
	(
		{
			snapPoints = ["25%", "50%", "70%"],
			children,
			index = 1,
			enablePanDownToClose = true,
			showIndicator = true,
			handleIndicatorStyle,
			backgroundStyle,
			...props
		},
		ref,
	) => {
		const { themeColor } = useTheme();
		const memoizedSnapPoints = React.useMemo(() => snapPoints, [snapPoints]);

		return (
			<GestureHandlerRootView>
				<GorhomBottomSheet
					ref={ref}
					index={index}
					snapPoints={memoizedSnapPoints}
					enablePanDownToClose={enablePanDownToClose}
					handleIndicatorStyle={[
						handleIndicatorStyle,
						{
							display: showIndicator ? "flex" : "none",
						},
					]}
					backgroundStyle={[
						{ backgroundColor: themeColor.background },
						backgroundStyle,
					]}
					{...props}
				>
					{children}
				</GorhomBottomSheet>
			</GestureHandlerRootView>
		);
	},
);

MyBottomSheet.displayName = "MyBottomSheet";
