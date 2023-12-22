import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Cell({ dispatch, rowIndex, columnIndex, cellValue }) {
  const Container = cellValue === null ? TouchableOpacity : View;
  const onPress =
    cellValue === null
      ? () =>
          dispatch({
            type: "make-move",
            rowIndex: rowIndex,
            columnIndex: columnIndex,
          })
      : undefined;
  return (
    <Container onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{cellValue}</Text>
    </Container>
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
