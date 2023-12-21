import { View, Text, StyleSheet } from "react-native";

import Cell from "./Cell";

export default function Row(props) {
  return (
    <View style={styles.container}>
      {props.row.map((cellValue, columnIndex) => {
        return (
          <Cell
            key={columnIndex}
            cellValue={cellValue}
            dispatch={props.dispatch}
            rowIndex={props.rowIndex}
            columnIndex={columnIndex}
          />
        );
      })}
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
