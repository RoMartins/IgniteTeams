import { Header } from '@components/Header';
import { Highlight } from '@components/Highlights';
import { useState } from 'react';
import {FlatList, View } from 'react-native';
import {ListEmpty } from '@components/ListEmpty';
import { GroupCard } from '@components/GroupCard';
import { ButtonComponent } from '@components/Button';
import { useNavigation } from '@react-navigation/native';

export function Groups() {
  const [ groups, SetGroups] = useState([])
  const navagation = useNavigation()
  function handleNewGroup() {
    navagation.navigate('new')
  }
  return (
    <View className="flex-1 bg-[#202024] p-6 ">
      <Header />
      <Highlight title='Turmas' subTitle='Jogue com sua turma'/>

      <FlatList 
      data={groups}
      keyExtractor={item => item}
      renderItem={({item}) => (
        <GroupCard title={item}/>
      )}
        contentContainerStyle={groups.length === 0 && {flex: 1}}
      ListEmptyComponent={() => (
        <ListEmpty message='Que tal cadastrar um nova turma?'/>  
      )}
      />

      <ButtonComponent title='Criar nova turma' type='primary' onPress={handleNewGroup}/>
    </View>
  );
}

