import { Header } from "@/components/shared/header";
import { Dimensions, FlatList, ScrollView, View } from "react-native";
import { ShortsVideo } from "@/components/shorts/shorts-video";
import shorts from "@/data/demo_shorts.json";
import { useDispatch, useSelector } from "react-redux";
import { setActiveShort, setShortData } from "@/services/slices/shorts-slice";
import { RootState } from "@/services/store";
import * as React from "react";

const Shorts = () => {
	const dispatch = useDispatch();
	const { activeShort, shortData } = useSelector((state: RootState) => state.shortsSlice)
	const screenHeight = Dimensions.get("window").height;

	const dummyVideos = [
		require("../../assets/video/BXTO5560.mp4"),
		require("../../assets/video/BAQA1219.mp4"),
		require("../../assets/video/CKUQ7943.mp4"),
		require("../../assets/video/DGPP4024.mp4"),
		require("../../assets/video/FQSJ1002.mp4"),
		require("../../assets/video/HKPI4209.mp4"),
		'https://videocdn.cdnpk.net/harmony/content/video/partners1395/large_watermarked/BB_c77fa73d-bcc6-46c9-a9ec-b1f5ecfb61e4_preview.mp4',
		'https://videocdn.cdnpk.net/happy/content/video/premium/partners0872/large_watermarked/BB_2e87a2c3-e531-42eb-bc4e-43e9e38c1e27_preview.mp4',
		'https://videocdn.cdnpk.net/happy/content/video/premium/partners0872/large_watermarked/BB_2e87a2c3-e531-42eb-bc4e-43e9e38c1e27_preview.mp4',
	]

	const newShortsData = shorts.map((item, index) => ({
		...item,
		video: dummyVideos[index % dummyVideos.length],
		creator: {
			id: item.creator.username,
			...item.creator
		}
	}))

	//Set the entire shorts array, and the active short on load if empty.
	React.useEffect(() => {
		if (!shortData.length) {
			dispatch(setShortData(newShortsData))
		}

		if (!activeShort) {
			dispatch(setActiveShort(newShortsData[0].id))
		}
	}, [activeShort, shortData]);


	return (
		<View className="bg-background">
			<Header
				hideLeftSection
				statusBarStyle="light"
				statusBarBackgroundColor="transparent"
				className="absolute top-0 z-10 w-full bg-transparent"
			/>

			{/* Scrollable Shorts */}
			<FlatList
				pagingEnabled
				data={shortData}
				keyExtractor={item => item.id}
				renderItem={({ item }) => (
					<View className="relative h-screen">
						<ShortsVideo short={item} />
					</View>
				)}
				showsVerticalScrollIndicator={false}
				snapToAlignment="start"
				snapToInterval={screenHeight}
				decelerationRate="normal"
				viewabilityConfig={{
					viewAreaCoveragePercentThreshold: 50
				}}
				onViewableItemsChanged={({ viewableItems }) => {
					if (viewableItems.length > 0) {
						const visibleItem = viewableItems[0];
						dispatch(setActiveShort(visibleItem.item.id))
					}
				}}
			/>
		</View>
	);
};

export default Shorts;
