import { View, StyleSheet, Text, Alert, Pressable } from 'react-native';

const lightColors = [
  '#FFF9E6', // Lemon Chiffon
  '#FFF0F5', // Lavender Blush
  '#F0FFF0', // Honeydew
  '#E6E6FA', // Lavender
  '#E0FFFF', // Light Cyan
  '#FAFAD2', // Light Goldenrod Yellow
  '#FFE4E1', // Misty Rose
  '#D8BFD8', // Thistle
  '#F5F5DC', // Beige
  '#FFE4B5', // Moccasin
];

function getRandomLightColor() {
  const randomIndex = Math.floor(Math.random() * lightColors.length);
  return lightColors[randomIndex];
}

const Box = ({ content }) => {
  return (
    <Pressable onPress={() => Alert.alert(`You clicked ${content}`)}>
      <View style={[styles.box, { backgroundColor: getRandomLightColor() }]}>
        <Text style={styles.boxContent}>{content}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  box: {
    height: 80,
    width: 'auto',
    backgroundColor: 'lightblue',
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  boxContent: {
    margin: 'auto',
  },
});

export default Box;
