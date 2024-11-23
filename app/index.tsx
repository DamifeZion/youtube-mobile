import MMKVStorage from "@/lib/storage";
import { persistor } from "@/services/store";
import { Redirect } from "expo-router";
import { useEffect } from "react";

export default function Index() {
	//Use the below to purge the storage from time to time based on redux
	// useEffect(() => {
	// 	const clear = async () => {
	// 		await persistor.purge();
	// 	};

	// 	clear();
	// }, [])

	// Below for video details
	// return (
	// 	<Redirect
	// 		href={{
	// 			pathname: "/video-details/[details]",
	// 			params: {
	// 				details: JSON.stringify({
	// 					id: 365177,
	// 					mediaType: "movie",
	// 				}),
	// 			},
	// 		}}
	// 	/>
	// );

	//Below is default
	return <Redirect href={{
		pathname: "/pages/short-sound-details/[soundID]",
		params: {
			soundID: "Science card."
		}
	}} />;
}
