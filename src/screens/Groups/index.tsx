import { StatusBar } from 'expo-status-bar';
import {Text, View } from 'react-native';

export function Groups() {
  return (
    <View className="flex-1 items-center justify-center bg-background-black">
      <Text className='text-3xl font-bold_roboto text-[#fff]'>Groups</Text>
      <StatusBar style="auto" />
    </View>
  );
}

