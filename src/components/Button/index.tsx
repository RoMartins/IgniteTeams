import { NativeWindStyleSheet } from "nativewind";
import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";


interface ButtonProps extends TouchableOpacityProps {
  title: string
  type: 'primary' | 'secondary'
}

NativeWindStyleSheet.create({
 styles: {
  primary: {
    backgroundColor: '#00875F'
  },
  secondary: {
    backgroundColor: '#AA2834'

  }
 }
});

export function ButtonComponent({type, title, ...props} : ButtonProps){
  return(
    
      <TouchableOpacity {...props} className={` flex-1 m-2 min-h-[56px] max-h-14 ${type} rounded-md justify-center items-center`}>
        <Text className="text-sm text-[#fff] font-bold_roboto">
        {title}
        </Text>
      </TouchableOpacity>
  )
}