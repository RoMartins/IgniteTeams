import { ButtonComponent } from "@components/Button";
import { ButtonIcon } from "@components/ButtonIcon";
import { Filter } from "@components/Filter";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlights";
import { InputComponent } from "@components/Input";
import { ListEmpty } from "@components/ListEmpty";
import { PlayerCard } from "@components/PlayerCard";
import { useState } from "react";
import { FlatList, Text, View } from "react-native";

export function Players() {
  const [teamSelected, setTeamSelected] = useState('Time A')
  const [players, setPlayers] = useState([])
  return (
    <View className=" flex-1 p-6 bg-background ">
      <Header showHeaderArrowButton />
      <Highlight subTitle="Adicione a galera e separe os times" title="Nome da turma"/>  

      <View className="w-full bg-gray-700 flex-row rounded-md">
        <InputComponent placeholder="Nome da pessoa"/>
        <ButtonIcon type="primary" icon="add"/>
      </View>


      <View  className='items-center flex-row justify-center mt-8 mb-3 w-full'>
        <FlatList 
        data={['Time A', 'Time B']}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <Filter  
          title={item} 
          isActive={item === teamSelected}
          onPress={() => setTeamSelected(item)}
          />
          )}
        horizontal
      />
      <Text className="text-gray-200 font-bold_roboto text-sm">
       {players.length}
      </Text>
    </View>

    <FlatList 
        data={players}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <PlayerCard  
          name={item} 
          onRemove={() => {}}
          />
          )}

          ListEmptyComponent={() => (
            <ListEmpty message="Não há pessoas nesse time"/>
          )}

          showsVerticalScrollIndicator= {false}
          contentContainerStyle={[
            {paddingBottom:100},
            players.length === 0 && {flex:1}
          ]}
      />

      <ButtonComponent title="Remover Turma" type="secondary"/>
    </View>
  )
}