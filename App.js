import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Class1 from './src/views/Class1'
import Class1Library from './src/views/Class1_library'
import Class2 from './src/views/Class2';
import Todo from './src/views/Class2_Todo';

export default function App() {
  return (
    <View style={styles.container}>

      {/* <Class1 /> */}
      {/* <Class1Library /> */}
      {/* <Class2 /> */}
      <Todo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
