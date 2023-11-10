import { Header } from '@components/Header';
import { Highlight } from '@components/Highlights';
import { useState } from 'react';
import {FlatList, View } from 'react-native';
import {ListEmpty } from '@components/ListEmpty';
import { GroupCard } from '@components/GroupCard';

export function Groups() {
  const [ groups, SetGroups] = useState([])
  return (
    <View className="flex-1 bg-background-black">
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
    </View>
  );
}

