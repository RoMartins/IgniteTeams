import { ButtonComponent } from "@components/Button";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlights";
import { InputComponent } from "@components/Input";
import { UsersThree } from "phosphor-react-native";
import { View } from "react-native";

export function NewGroup() {
  return(
    <View className="flex-1 p-6 bg-[#202024]">

      <Header showHeaderArrowButton/>

      <View className="flex-1 justify-center ">
        <UsersThree size={56} color="#00875F" style={{alignSelf: "center"}}/>
        <Highlight title="Nova turma" subTitle="crie a turma para adicionar pessoas"/>

          <InputComponent placeholder="Nome da turma"/>

        <ButtonComponent title="Criar" type="primary" className="mt-5"/>
      </View>

    </View>
  )
}