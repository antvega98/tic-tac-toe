import { View, Text, StyleSheet } from "react-native";

import Row from "./Row";

export default function Board({ board, dispatch }) {
  return (
    <View style={styles.container}>
      {board.map((row, rowIndex) => (
        <Row key={rowIndex} row={row} dispatch={dispatch} rowIndex={rowIndex} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "cornflowerblue",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    gap: 20,
    borderRadius: 15,
  },
});
