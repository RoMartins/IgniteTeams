import { Text, View } from "react-native";

interface CardEmptyProps {
  message: string
}

export function ListEmpty({message}: CardEmptyProps){
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-[#7C7C8A] font-regular_roboto text-sm">
        {message}
      </Text>
    </View>
  )
} 