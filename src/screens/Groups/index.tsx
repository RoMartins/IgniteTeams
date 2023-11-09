import { Header } from '@components/Header';
import { Highlight } from '@components/Highlights';
import {View } from 'react-native';

export function Groups() {
  return (
    <View className="flex-1 bg-background-black">
      <Header />
      <Highlight title='Turmas' subTitle='Jogue com sua turma'/>
    </View>
  );
}

