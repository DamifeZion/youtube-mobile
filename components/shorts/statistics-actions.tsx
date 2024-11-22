import { useTheme } from "@/hooks/shared/use-theme"
import { Image, Pressable, View } from "react-native"
import * as React from "react";
import { Text } from "../ui/text";
import { useDispatch, useSelector } from "react-redux";
import MySVG from "../ui/svg";
import { COMMENT, DISLIKE, LIKE, REMIX, SHARE } from "@/assets/icons/icons";
import { toggleShortDisLike, toggleShortLike } from "@/services/slices/shorts-slice";
import { ShortVideoType } from "./shorts-video";
import { RootState } from "@/services/store";

type StatisticsActionsProps = {
   short: ShortVideoType;
}

export const StatisticsActions: React.FC<StatisticsActionsProps> = ({
   short
}) => {
   const dispatch = useDispatch();
   const { themeColor } = useTheme();

   const { likedShorts, dislikedShorts } = useSelector((state: RootState) => state.shortsSlice);

   const isLiked = likedShorts.includes(short.id);
   const isDisliked = dislikedShorts.includes(short.id);

   return (
      <View className="items-center gap-4">
         <Pressable
            onPress={() => dispatch(toggleShortLike(short.id))}
            className="w-[76px] h-[76px] items-center justify-center gap-2 rounded-full active:bg-white/10"
         >
            <MySVG name={LIKE} size={30} color={isLiked ? themeColor.light_blue : themeColor.white} />

            <Text className="text-center text-white">
               {short.statistics.likes}
            </Text>
         </Pressable>

         <Pressable
            onPress={() => dispatch(toggleShortDisLike(short.id))}
            className="w-[76px] h-[76px] items-center justify-center gap-2 rounded-full active:bg-white/10"
         >
            <MySVG name={DISLIKE} size={30} color={isDisliked ? themeColor.light_blue : themeColor.white} />

            <Text className="text-center text-white">
               {/* {short.statistics.dislikes} */}
               Dislikes
            </Text>
         </Pressable>

         {/* Open Comment Drawer */}
         <Pressable
            onPress={() => console.log("Open Comments Drawer")}
            className="w-[76px] h-[76px] items-center justify-center gap-2 rounded-full active:bg-white/10"
         >
            <MySVG name={COMMENT} size={30} />

            <Text className="text-center text-white">
               {short.statistics.comments}
            </Text>
         </Pressable>

         {/* Share */}
         <Pressable
            onPress={() => console.log("Open Share Drawer")}
            className="w-[76px] h-[76px] items-center justify-center gap-2 rounded-full active:bg-white/10"
         >
            <MySVG name={SHARE} size={30} />

            <Text className="text-center text-white">
               Share
            </Text>
         </Pressable>

         {/* GO To Remix Page */}
         <Pressable
            onPress={() => console.log("Open Share Drawer")}
            className="w-[76px] h-[76px] items-center justify-center gap-2 rounded-full active:bg-white/10"
         >
            <MySVG name={REMIX} size={30} />

            <Text className="text-center text-white">
               {short.statistics.remixes}
            </Text>
         </Pressable>

         <Pressable className="mt-3">
            <Image
               source={{
                  uri: short.audio.profilePicture
               }}
               resizeMode="cover"
               className="w-10 h-10 rounded-md"
            />
         </Pressable>
      </View>
   )
}