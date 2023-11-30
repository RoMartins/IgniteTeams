import { ButtonIcon } from "@components/ButtonIcon";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlights";
import { InputComponent } from "@components/Input";
import { View } from "react-native";

export function Players() {
  return (
    <View className=" flex-1 p-6 bg-background ">
      <Header showHeaderArrowButton />
      <Highlight subTitle="Adicione a galera e separe os times" title="Nome da turma"/>  

      <View className="w-full bg-gray-700 flex-row rounded-md">
        <InputComponent placeholder="Nome da pessoa"/>
        <ButtonIcon type="primary" icon="add"/>
      </View>
    </View>
  )
}