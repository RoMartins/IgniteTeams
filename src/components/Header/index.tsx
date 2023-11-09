import { Image, TouchableOpacity, View } from "react-native";
import logo from '@assets/logo.png'
import * as Svg from 'react-native-svg';
import {CaretLeft} from 'phosphor-react-native'

interface HeaderProps {
  showHeaderArrowButton?: boolean
}

export function Header({showHeaderArrowButton = false}: HeaderProps) {
  return (
    <View className="mt-12 w-full items-center flex-row justify-center">
      {
        showHeaderArrowButton && 
        <TouchableOpacity className="flex-1">
          <CaretLeft color="#FFF" size={32}/>
        </TouchableOpacity>
      }
     
      <Image className="w-12 h-14" source={logo}/>
    </View>
  )
}