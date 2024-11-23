import { Dimensions, Pressable, View } from "react-native";
import * as React from "react";
import { VideoView, useVideoPlayer } from "expo-video"
import { useEvent } from "expo";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/services/store";
import { usePathname } from "expo-router";
import { Text } from "../ui/text";
import { useTheme } from "@/hooks/shared/use-theme";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { PlayPauseBTN } from "./play-pause-btn";
import { StatisticsActions } from "./statistics-actions";
import { cn } from "@/lib/utils";
import { toggleChannelSubscriptions } from "@/services/slices/profile-slice";
import MySVG from "../ui/svg";
import { SOUND } from "@/assets/icons/icons";
import LucideIcon from "../ui/lucide-icon";

export type ShortVideoType = {
   id: string;
   video: string;
   title: string;
   thumbnail: string;
   creator: {
      id: string;
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
      id: string;
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
   const { themeColor } = useTheme()
   const pathname = usePathname();
   const dispatch = useDispatch();
   const { activeShort } = useSelector((state: RootState) => state.shortsSlice);
   const { channelSubscriptions } = useSelector((state: RootState) => state.profileSlice)

   // Init Player Instance;
   const player = useVideoPlayer(short.video, (player) => {
      player.loop = true;
   })

   // Automatically play/pause based on activeShort
   React.useEffect(() => {
      if (activeShort === short.id) {
         player.play();
         player.replay();
      } else {
         player.pause();
      }
   }, [activeShort, short.id, player]);

   // Play and restart if we in the shorts page.
   React.useLayoutEffect(() => {
      if (pathname === "/shorts") {
         if (activeShort === short.id) {
            player.play();
            player.replay();
         }
      }
      else {
         player.pause()
      }
   }, [pathname, player])

   //Player Event Listeners
   const { isPlaying } = useEvent(player, 'playingChange', { isPlaying: player.playing })


   const isSubscribed = channelSubscriptions.includes(short.creator.id)

   return (
      <Pressable
         onPress={() => player.playing ? player.pause() : player.play()}
         className="w-screen h-screen"
      >
         {player && (
            <View pointerEvents="none">
               <VideoView
                  player={player}
                  style={{
                     width: Dimensions.get('window').width,
                     height: Dimensions.get('window').height,
                  }}
                  contentFit="cover"
                  nativeControls={false}
               />
            </View>
         )}

         {/* Play / Pause Control */}
         <PlayPauseBTN isPlaying={isPlaying} />

         {/* Title & Statistics */}
         <View className="absolute bottom-0 left-0 flex-row w-full gap-4 py-5 pl-4">
            <View className="flex-1 mt-auto">
               <View className="flex flex-row items-center gap-2">
                  <Avatar
                     alt=""
                     className="w-8 h-8"
                  >
                     <AvatarImage
                        source={{ uri: short.creator.profilePicture }}
                     />
                     <AvatarFallback>
                        <Text>
                           {short.creator.username.slice(0, 2)}
                        </Text>
                     </AvatarFallback>
                  </Avatar>

                  <Text className="text-white font-body-medium mr-0.5 max-w-[190px]">
                     @{short.creator.username}
                  </Text>

                  <Button
                     onPress={() =>
                        dispatch(toggleChannelSubscriptions(short.creator.id))
                     }
                     className={cn(" rounded-full native:px-4 native:py-0 native:h-[34px] bg-white", {
                        "bg-white/20": isSubscribed
                     })}
                  >
                     <Text className={cn("text-black font-body-medium !text-sm leading-none", {
                        "text-white": isSubscribed
                     })}>
                        {isSubscribed ? "Subscribed" : "Subscribe"}
                     </Text>
                  </Button>
               </View>

               <Text className="mt-3 text-white line-clamp-2">
                  {short.title}
               </Text>

               <View className="flex-row gap-1 mt-4">
                  <MySVG name={SOUND} size={18} />

                  <View className="flex-row items-center gap-1">
                     <Text className="text-white">
                        {short.audio.title}
                     </Text>

                     <LucideIcon
                        name="Dot"
                        className="stroke-white"
                        size={16}
                     />

                     <Text className="text-white">
                        {short.audio.artist}
                     </Text>
                  </View>
               </View>
            </View>

            {/* Statistics */}
            <StatisticsActions short={short} />
         </View>
      </Pressable>
   )
}