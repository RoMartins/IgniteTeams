import { UsersThree } from "phosphor-react-native";
import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";

interface GroupCardProps extends TouchableOpacityProps {
  title: string
} 

export function GroupCard({title, ...props}:GroupCardProps) {
  return (
    <TouchableOpacity {...props} className="h-20 bg-zinc-800 rounded-md p-6 mx-6 mb-3 items-center flex-row">
      <UsersThree size={32} weight="fill" color="#00875F" style={{marginRight: 20}}/>
      <Text className="text-lg font-regular_roboto font-normal text-zinc-200">{title}</Text>
    </TouchableOpacity>
  )
}