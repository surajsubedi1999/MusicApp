import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { styles } from './styles/HomeScreenStyles';

export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreen />
      <StatusBar style="light" />
    </View>
  );
}