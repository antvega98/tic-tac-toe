import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Cell({ dispatch, rowIndex, columnIndex, cellValue }) {
  return (
    <TouchableOpacity
      onPress={() => {
        dispatch({
          type: "make-move",
          rowIndex: rowIndex,
          columnIndex: columnIndex,
        });
      }}
      style={styles.container}
    >
      <Text style={styles.text}>{cellValue}</Text>
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
