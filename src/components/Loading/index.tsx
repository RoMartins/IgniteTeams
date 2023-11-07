import { ActivityIndicator, View } from "react-native";

export function LoadingIndicator() {
  return (
    <View className="bg-background-black flex-1 justify-center items-center">
      <ActivityIndicator color='green' size={"large"} />
    </View>
  )
}