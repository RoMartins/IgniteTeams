import { Text, View } from "react-native";

interface HighlightProps {
  title: string
  subTitle: string
}

export function Highlight({subTitle, title}: HighlightProps) {
  return(
    <View className="w-full mx-8 my-0 ">
      <Text className="text-2xl text-#fff font-bold_roboto ">
          {title}
      </Text>
      <Text  className="text-base text-gray-400 font-regular_roboto">
          {subTitle}
      </Text>
    </View>
  )
}