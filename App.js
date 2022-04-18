import { StyleSheet, Text, View ,SafeAreaView} from 'react-native';
import Navigation from './src/navigation';
import HomeScreen from './src/screens/HomeScreen';
import MapScreen from './src/screens/MapScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.root}>
    <Navigation/> 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root:{
    flex:1,
    backgroundColor:'#F9FBFC'
  },
});
