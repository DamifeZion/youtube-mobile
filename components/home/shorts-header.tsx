import { Image, View } from "react-native";
import { Text } from "../ui/text";
import { Button } from "../ui/button";
import LucideIcon from "../ui/lucide-icon";

export const ShortsHeader = () => {
	return (
		<View className="flex-row items-center gap-3 pl-2">
			<Image source={require("@/assets/images/shorts.png")} />

			<Text className="text-2xl font-body-bold">Shorts</Text>

			{/* Bottom Tab Trigger */}
			<Button variant="ghost" size="icon" className="ml-auto rounded-full">
				<LucideIcon name="EllipsisVertical" />
			</Button>
		</View>
	);
};
