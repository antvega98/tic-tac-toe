import { View, Text, StyleSheet } from "react-native";

export default function Cell(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.cell}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    height: 80,
    aspectRatio: 1,
    borderRadius: 20,
  },
  text: {
    fontSize: 60,
    color: "white",
  },
});
