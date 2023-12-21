import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Cell(props) {
  return (
    <TouchableOpacity
      onPress={() => {
        props.dispatch({
          type: "make-move",
          rowIndex: props.rowIndex,
          columnIndex: props.columnIndex,
        });
      }}
      style={styles.container}
    >
      <Text style={styles.text}>{props.cellValue}</Text>
    </TouchableOpacity>
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
