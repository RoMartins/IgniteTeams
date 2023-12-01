import { NativeWindStyleSheet } from "nativewind";
import { TouchableOpacity, TouchableOpacityProps } from "react-native"
import {MaterialIcons} from '@expo/vector-icons'

interface ButtonIconProps extends TouchableOpacityProps {
  type?: 'primary' | 'secondary',
  icon: keyof typeof MaterialIcons.glyphMap;
}


export function ButtonIcon({icon, type = 'primary', ...rest}: ButtonIconProps){
  return (
    <TouchableOpacity className={`ml-3 items-center justify-center w-14 h-14 `}>
      <MaterialIcons name={icon} size={24} color={type === 'primary' ? '#00875F':'#AA2834'}/>
    </TouchableOpacity>
  )
}