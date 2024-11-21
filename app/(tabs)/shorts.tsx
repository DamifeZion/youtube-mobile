import { Header } from "@/components/shared/header";
import { StatusBar } from "expo-status-bar";
import { Dimensions, ScrollView, View } from "react-native";
import { useState } from "react";
import { Text } from "@/components/ui/text";
import { UI } from "@/lib/constants";

const Shorts = () => {
	const screenHeight = Dimensions.get("window").height;
	const [headerHeight, setHeaderHeight] = useState(0);
	const videoHeight = screenHeight + headerHeight - UI.layout.tabBarHeight;

	return (
		<View className="flex-1 bg-background">
			<StatusBar backgroundColor="transparent" translucent />

			<Header
				hideLeftSection
				hideStatusBarComponent
				className="absolute top-0 right-0 z-10 bg-transparent"
			/>

			{/* Scrollable Shorts */}
			<ScrollView
				pagingEnabled
				showsVerticalScrollIndicator={false}
				snapToAlignment="end"
				snapToInterval={screenHeight}
				decelerationRate="fast"
			>
				{/* Full-Screen Views */}
				<View
					style={{
						height: videoHeight,
					}}
					className="flex items-center justify-center bg-red-600"
				>
					<Text className="text-2xl text-white">Short 1</Text>
				</View>

				<View
					style={{
						height: videoHeight,
					}}
					className="flex items-center justify-center bg-green-600"
				>
					<Text className="text-2xl text-white">Short 2</Text>
				</View>

				<View
					style={{
						height: videoHeight,
					}}
					className="flex items-center justify-center bg-blue-600"
				>
					<Text className="text-2xl text-white">Short 3</Text>
				</View>
			</ScrollView>
		</View>
	);
};

export default Shorts;
