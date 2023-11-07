import {Groups} from '@screens/Groups'
import {useFonts, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto'
import { LoadingIndicator } from '@components/Loading';


export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  })


  return (
    <>
    {!fontsLoaded ? <Groups /> : <LoadingIndicator />}
    </>
  );
}

