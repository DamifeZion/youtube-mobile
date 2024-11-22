import { Dimensions, Pressable, View } from "react-native";
import * as React from "react";
import { VideoView, useVideoPlayer } from "expo-video"
import { useEvent } from "expo";
import { Button } from "../ui/button";
import LucideIcon from "../ui/lucide-icon";

export type ShortVideoType = {
   id: string;
   video: string;
   title: string;
   thumbnail: string;
   creator: {
      username: string;
      profilePicture: string;
   };
   statistics: {
      remixes: number;
      likes: number;
      dislikes: number;
      comments: number;
   };
   audio: {
      title: string;
      artist: string;
      shortsUsingThisAudio: number;
      profilePicture: string;
   };
   publishedAt: string;
   duration: number;
   tags: Array<string>;
};


type ShortVideoProps = {
   isLoading?: boolean;
   short: ShortVideoType
}


export const ShortsVideo: React.FC<ShortVideoProps> = ({
   isLoading,
   short
}) => {
   const player = useVideoPlayer(short.video, (player) => {
      player.loop = true;
   })

   //Player Event Listeners
   const { isPlaying } = useEvent(player, 'playingChange', { isPlaying: player.playing })
   
   // Toggle Play/Pause functionality
   const togglePlayPause = () => {
      if (isPlaying) {
         player.pause();
         console.log("Pause")
      } else {
         player.play();
         console.log("Play")
      }
   };

   return (
      <Pressable
         onPress={togglePlayPause}
         className="relative w-screen h-screen bg-blue-600"
      >
         {player && (
            <VideoView
               player={player}
               style={{
                  width: Dimensions.get('window').width,
                  height: Dimensions.get('window').height,
               }}
               contentFit="cover"
               contentPosition={{
                  dx: 150,
                  dy: 50
               }}
               nativeControls={false}
               allowsPictureInPicture
               startsPictureInPictureAutomatically
            />
         )}

         {/* Controle */}
         <Button
            size="icon"
            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full top-1/2 left-1/2 bg-black/50 native:w-20 native:h-20"
         >
            <LucideIcon
               name={isPlaying ? "Pause" : "Play"}
               className="text-white"
            />
         </Button>
      </Pressable>
   )
}