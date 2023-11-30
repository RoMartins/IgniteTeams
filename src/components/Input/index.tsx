import { TextInput, TextInputProps } from "react-native";

export function InputComponent({...rest}: TextInputProps) {
  return (
    <TextInput  
      className="flex-1 min-h-[56px] max-h-14 text-[#fff] rounded-md p-4 bg-gray-700 font-regular_roboto text-base"
    />
  )
}