import { homeConst } from "@/constants/home-const";
import * as React from "react";

type VideosListType = {
	type: "short" | "video";
	data: any;
};

export const useHome = () => {
	const [category, setCategory] = React.useState<string | number>("");

	// DUMMY JSON DATA
	const { shortsData, videoData } = homeConst;
	const videosList: Array<VideosListType> = [];
	let shortIndex = 0;
	let videoIndex = 0;

	while (shortIndex < shortsData.length || videoIndex < videoData.length) {
		// Add a group of 4 shorts
		if (shortIndex < shortsData.length) {
			videosList.push({
				type: "short",
				data: shortsData.slice(shortIndex, shortIndex + 4),
			});
			shortIndex += 4;
		}

		// Add 5 Videos
		if (videoIndex < videoData.length) {
			videosList.push({
				type: "video",
				data: videoData.slice(videoIndex, videoIndex + 5),
			});

			videoIndex += 5;
		}
	}

	return {
		category,
		setCategory,
		videosList,
	};
};
