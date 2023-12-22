import { View, Text, StyleSheet } from "react-native";

import Cell from "./Cell";

export default function Row({ row, dispatch, rowIndex }) {
  return (
    <View style={styles.container}>
      {row.map((cellValue, columnIndex) => (
        <Cell
          key={columnIndex}
          cellValue={cellValue}
          dispatch={dispatch}
          rowIndex={rowIndex}
          columnIndex={columnIndex}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 20,
  },
});
