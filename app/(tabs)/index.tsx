import { EXPLORE } from "@/assets/icons/icons";
import { CategoryChip } from "@/components/home/category-chip";
import { Header } from "@/components/shared/header";
import { Button } from "@/components/ui/button";
import MySVG from "@/components/ui/svg";
import { Text } from "@/components/ui/text";
import { homeConst } from "@/constants/home-const";
import { generateUniqueKey } from "@/helpers/generate-unique-key";
import { useTheme } from "@/hooks/shared/use-theme";
import { useHome } from "@/hooks/use-home";
import { Image, ScrollView, View } from "react-native";
import { ShortPreviewCard } from "@/components/shorts/shorts-preview-card";
import { ShortsHeader } from "@/components/home/shorts-header";
import { Section } from "@/components/shared/section";
import { VideoPreview } from "@/components/shared/video-preview";
import { cn } from "@/lib/utils";

const Home = () => {
	const { themeColor } = useTheme();
	const { category, setCategory, videosList } = useHome();

	return (
		<ScrollView
			stickyHeaderIndices={[0]}
			stickyHeaderHiddenOnScroll
			className="bg-background"
			contentContainerClassName="pb-safe-offset-4 bg-background"
		>
			{/* Header Section */}
			<Section className="!px-0 bg-transparent">
				<Header />

				<ScrollView
					horizontal
					showsHorizontalScrollIndicator={false}
					contentContainerClassName="bg-background gap-2 pt-1 pb-2"
				>
					{/* Side Bar Trigger */}
					<Button
						size="icon"
						variant="secondary"
						className="mr-2.5 rounded-xl native:px-7"
					>
						<MySVG name={EXPLORE} color={themeColor.foreground} />
					</Button>

					{homeConst.categories.map((item, index) => {
						const isAllCategory = item === "all";
						const isActive =
							!category && isAllCategory ? true : category === item;

						return (
							<CategoryChip
								key={generateUniqueKey(index)}
								isActive={isActive}
								text={item}
								onPress={() => setCategory(item)}
								textClassName="capitalize"
							/>
						);
					})}

					<Button
						variant="link"
						className="rounded-xl native:w-fit native:h-fit native:py-0"
					>
						<Text className="text-blue-600 font-body-medium">
							Send feedback
						</Text>
					</Button>
				</ScrollView>
			</Section>

			{videosList.map((item, index) => {
				if (item.type === "short") {
					// SHORTS
					return (
						<Section
							key={generateUniqueKey(index)}
							className={cn("mt-4 gap-2", {
								"mt-10": index !== 0,
							})}
						>
							<ShortsHeader />

							<View className="flex-row flex-wrap gap-y-3 gap-x-3">
								{/* Render 4 Shorts */}
								{item.data.map((short: any, shortIndex: number) => (
									<ShortPreviewCard
										key={generateUniqueKey(`shorts-${shortIndex}`)}
										title={short.title}
										thumbnail={short.thumbnail}
									/>
								))}
							</View>
						</Section>
					);
				} else if (item.type === "video") {
					// RENDER 5 VIDEOS
					return (
						<Section className="gap-10 mt-10 !px-0">
							{item.data.map((video: any, videoIndex: number) => (
								<VideoPreview
									key={`video-${generateUniqueKey(videoIndex)}`}
									title={video.title}
									thumbnail={video.thumbnail}
									creator={video.creator}
									views={video.statistics.views}
									publishedAt={video.publishedAt}
								/>
							))}
						</Section>
					);
				}
			})}
		</ScrollView>
	);
};
export default Home;
