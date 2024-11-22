import { ShortVideoType } from "@/components/shorts/shorts-video";
import shortsData from "@/data/demo_shorts.json";
import { useVideoPlayer, VideoPlayer } from "expo-video";
import * as React from "react";

export const useShorts = () => {


	return {
		shortsData, // Demo data
	};
};
