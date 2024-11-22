import * as React from "react";
import { Text } from "../ui/text";
import { Button } from "../ui/button";
import LucideIcon from "../ui/lucide-icon";
import { Image, Pressable, View } from "react-native";

type ShortsPreviewCardProps = {
	title: string;
	thumbnail: string;
	isLoading?: boolean;
	onPress?: () => void;
};

export const ShortPreviewCard: React.FC<ShortsPreviewCardProps> = ({
	thumbnail,
	title,
	isLoading,
	onPress,
}) => {
	return (
		<Pressable
			onPress={onPress}
			className="w-[48.5%] relative overflow-hidden rounded-md native:h-[260px]"
		>
			<Image
				source={{ uri: thumbnail }}
				resizeMode="cover"
				className="w-full h-full"
			/>

			<View className="absolute top-0 left-0 items-center justify-between w-full h-full">
				<Button
					size="icon"
					variant="ghost"
					className="ml-auto -mt-1 -mr-2 rounded-full native:p-7 active:bg-muted/20"
					onPress={() => {
						console.log("Toggle Shorts Bottom Sheet");
					}}
				>
					<LucideIcon name="EllipsisVertical" className="stroke-white" />
				</Button>

				<Text className="px-1.5 py-2.5 mt-auto leading-9 text-white text-lg font-body-semibold line-clamp-2">
					{title}
				</Text>
			</View>
		</Pressable>
	);
};
