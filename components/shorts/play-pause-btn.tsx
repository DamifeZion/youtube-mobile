import { Button } from "../ui/button"
import * as React from "react";
import LucideIcon from "../ui/lucide-icon";
import { cn } from "@/lib/utils";

type PlayPauseBTNType = {
   isPlaying?: boolean
}

export const PlayPauseBTN: React.FC<PlayPauseBTNType> = ({
   isPlaying
}) => {

   return (
      <Button
         size="icon"
         className={cn("absolute -translate-x-1/2 -translate-y-1/2 rounded-full top-1/2 left-1/2 bg-black/50 active:bg-black/50 native:w-20 native:h-20", {
            "hidden": isPlaying
         })}
      >
         <LucideIcon
            name={isPlaying ? "Pause" : "Play"}
            className="text-white"
         />
      </Button>
   )
}