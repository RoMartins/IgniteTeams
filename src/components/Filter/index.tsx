import { NativeWindStyleSheet } from "nativewind";
import { TouchableOpacity , Text, TouchableOpacityProps} from "react-native"

interface FilterProps extends TouchableOpacityProps {
  title: string
  isActive: boolean
}
 
export function Filter({title, isActive, ...rest }: FilterProps) {
  return(

<TouchableOpacity 
  {...rest}
  className={`rounded mr-3 h-9 w-16 ${isActive === true ? 'border  border-green-700' : '' } items-center justify-center`}>
  <Text className="font-regular_roboto text-sm text-[#fff] uppercase">
    {title}
  </Text>
</TouchableOpacity>
  )
}