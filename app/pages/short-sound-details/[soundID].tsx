import { Header } from "@/components/shared/header";
import { Button } from "@/components/ui/button";
import LucideIcon from "@/components/ui/lucide-icon";
import { Text } from "@/components/ui/text";
import { useTheme } from "@/hooks/shared/use-theme";
import { RootState } from "@/services/store";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ScrollView, View } from "react-native"
import { useSelector } from "react-redux";


const ShortSoundDetails = () => {
   const { soundID } = useLocalSearchParams();
   const { themeColor } = useTheme();
   const { shortData } = useSelector((state: RootState) => state.shortsSlice)

   const soundDetails = shortData.find((item) => item.audio.title === soundID)
   const sound = soundDetails?.audio;

   return (
      <View className="flex-1 bg-background">
         <StatusBar
            backgroundColor={themeColor.background}
         />

         {/* Header */}
         <View className="flex-row items-center gap-1 pb-2 border-b pt-safe px-containerHorizontal bg-background border-border">
            {router.canGoBack() && (
               <Button
                  size="icon"
                  variant="ghost"
                  className="rounded-full native:h-12 native:w-12"
               >
                  <LucideIcon name="ChevronLeft" size={28} />
               </Button>
            )}

            <Text className="max-w-[150px] font-body-bold text-lg truncate text-ellipsis">
               {sound?.title}
            </Text>

            <Button
               size="icon"
               variant="ghost"
               className="ml-auto rounded-full native:h-12 native:w-12"
            >
               <MaterialCommunityIcons
                  name="share-outline"
                  size={28}
                  color={themeColor.foreground}
               />
            </Button>

            <Button
               size="icon"
               variant="ghost"
               className="rounded-full native:h-12 native:w-12"
            >
               <LucideIcon name="EllipsisVertical" size={28} />
            </Button>
         </View>

         <ScrollView contentContainerClassName="pb-safe-offset-4">
            <Text>
               Short Sound Details
            </Text>
         </ScrollView>
      </View>
   )
}

export default ShortSoundDetails;