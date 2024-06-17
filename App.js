import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Box from './components/Box';

const data = [
  'One',
  'Two',
  'Three',
  'Four',
  'Five',
  'Six',
  'Seven',
  'Eight',
  'Nine',
  'Ten',
];

const App = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        {data.map((d) => (
          <Box content={d} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop: 80,
    paddingBottom: 30,
    paddingHorizontal: 0,
  },
});

export default App;
