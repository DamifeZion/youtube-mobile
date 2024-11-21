import { useRef } from "react";
import GorhomBottomSheet from "@gorhom/bottom-sheet";

export const useMyBottomSheet = () => {
	const ref = useRef<GorhomBottomSheet>(null);

	const handleOpen = () => {
		ref.current?.snapToIndex(1); // Ensure this expands the sheet
		console.log("open");
	};

	const handleClose = () => {
		ref.current?.close(); // Ensure this closes the sheet
		console.log("close");
	};

	return { ref, handleOpen, handleClose };
};
