import { Header } from "@/components/shared/header";
import { Dimensions, FlatList, ScrollView, View } from "react-native";
import { ShortsVideo } from "@/components/shorts/shorts-video";
import { useShorts } from "@/hooks/use-shorts";
import { generateUniqueKey } from "@/helpers/generate-unique-key";

const Shorts = () => {
	const screenHeight = Dimensions.get("window").height;
	const { shortsData } = useShorts()
	const dummyVideos = [
		'https://videocdn.cdnpk.net/harmony/content/video/partners1395/large_watermarked/BB_c77fa73d-bcc6-46c9-a9ec-b1f5ecfb61e4_preview.mp4',
		'https://videocdn.cdnpk.net/happy/content/video/premium/partners0872/large_watermarked/BB_2e87a2c3-e531-42eb-bc4e-43e9e38c1e27_preview.mp4',
		'https://videocdn.cdnpk.net/happy/content/video/premium/partners0872/large_watermarked/BB_2e87a2c3-e531-42eb-bc4e-43e9e38c1e27_preview.mp4',
		require("../../assets/video/BAQA1219.mp4"),
		require("../../assets/video/BXTO5560.mp4"),
		require("../../assets/video/CKUQ7943.mp4"),
		require("../../assets/video/DGPP4024.mp4"),
		require("../../assets/video/FQSJ1002.mp4"),
		require("../../assets/video/HKPI4209.mp4"),
	]

	const newShortsData = shortsData.map((item, index) => ({
		...item,
		video: dummyVideos[index % dummyVideos.length]
	}))

	return (
		<View className="flex-1 bg-background">
			<Header
				hideLeftSection
				statusBarStyle="light"
				statusBarBackgroundColor="transparent"
				className="absolute top-0 right-0 z-10 bg-transparent"
			/>

			{/* Scrollable Shorts */}
			<FlatList
				data={newShortsData}
				renderItem={({ item }) => (
					<ShortsVideo short={item} />
				)}
				keyExtractor={item => item.id}
				pagingEnabled
				showsVerticalScrollIndicator={false}
				snapToAlignment="start"
				snapToInterval={screenHeight}
				decelerationRate="fast"
			/>
		</View>
	);
};

export default Shorts;
