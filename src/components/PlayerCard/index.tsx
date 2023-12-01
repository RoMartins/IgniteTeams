import { Text, View } from "react-native";
import {MaterialIcons} from '@expo/vector-icons'
import { ButtonIcon } from "@components/ButtonIcon";

interface PlayerCardProps {
  name: string;
  onRemove: () => void;
}
export function PlayerCard({ name, onRemove}: PlayerCardProps) {
 return(
  <View className="w-full h-14 bg-gray-500 mb-4 rounded-md flex-row items-center">
    <MaterialIcons name="person" size={24} color='#C4C4CC' style={{marginLeft:12, marginRight: 4}} />
    <Text className="flex-1 text-gray-200 font-regular_roboto text-base" >
      {name}
    </Text>
    <ButtonIcon icon="close" type="secondary" onPress={onRemove}/>
  </View>
 )  
}