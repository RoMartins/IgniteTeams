import {useFonts, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto'
import { LoadingIndicator } from '@components/Loading';
import { StatusBar } from 'react-native';
import { Routes } from '@routes/index';


export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  })


  return (
    <>
    <StatusBar 
    
    barStyle={'light-content'}
    backgroundColor="transparent"
    translucent
    />
    {fontsLoaded ? <Routes /> : <LoadingIndicator />}
    </>
  );
}

