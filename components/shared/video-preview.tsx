import * as React from "react";
import { Image, Pressable, View } from "react-native";
import { Text } from "../ui/text";
import { Button } from "../ui/button";
import LucideIcon from "../ui/lucide-icon";
import moment from "moment";
import { formatNumber } from "@/helpers/format-number";

type VideoPreviewProps = {
	isLoading?: boolean;
	onPress?: () => void;
	title?: string;
	thumbnail?: string;
	creator: {
		username: string;
		profilePicture: string;
	};
	views: number;
	duration: number;
	publishedAt: string | Date;
	onEllipsisPress?: () => void;
};

export const VideoPreview: React.FC<VideoPreviewProps> = ({
	isLoading,
	onPress,
	title,
	thumbnail,
	creator,
	views,
	publishedAt,
	duration,
	onEllipsisPress,
}) => {
	return (
		<Pressable onPress={onPress}>
			<View className="relative w-full h-64">
				<Image
					source={{ uri: thumbnail }}
					resizeMode="cover"
					className="w-full h-full"
				/>

				<Text className="absolute px-1.5 py-1 text-white rounded-md font-body-medium bg-black/60 bottom-2 right-2">
					{duration}
				</Text>
			</View>

			<Pressable className="flex-row gap-4 pt-2 px-containerHorizontal active:bg-muted">
				<Image
					source={{
						uri: creator.profilePicture,
					}}
					resizeMode="cover"
					className="mt-2 rounded-full w-14 h-14"
				/>

				<View className="flex-1 py-2">
					<Text className="-mt-1 text-lg line-clamp-2">{title}</Text>

					<View className="flex-row items-center -mt-1 ">
						<Text className="text-lg text-muted-foreground">
							{creator.username}
						</Text>

						<LucideIcon
							name="Dot"
							className="stroke-muted-foreground"
							size={16}
						/>

						<Text className="text-md text-muted-foreground">
							{formatNumber(views)} views
						</Text>

						<LucideIcon
							name="Dot"
							className="stroke-muted-foreground"
							size={16}
						/>

						<Text className="text-lg text-muted-foreground">
							{moment(publishedAt).fromNow()}
						</Text>
					</View>
				</View>

				<Button
					size="icon"
					variant="ghost"
					onPress={() => {
						onEllipsisPress && onEllipsisPress();
						console.log("Handle Video Ellipsis Bottom Drawer Display");
					}}
					className="rounded-full"
				>
					<LucideIcon name="EllipsisVertical" className="" />
				</Button>
			</Pressable>
		</Pressable>
	);
};
