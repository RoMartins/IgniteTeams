import { GroupCard } from '@assets/GroupCard';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlights';
import { useState } from 'react';
import {FlatList, View } from 'react-native';

export function Groups() {
  const [ groups, SetGroups] = useState(['Galera rocketseat', 'ignite'])
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
      />
    </View>
  );
}

