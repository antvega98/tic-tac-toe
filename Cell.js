import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Svg, { Circle, Line } from "react-native-svg";

function X() {
  return (
    <Svg height={80} width={80} viewBox="0 0 100 100">
      <Line x1={20} y1={20} x2={80} y2={80} stroke="black" strokeWidth={8} />
      <Line x1={80} y1={20} x2={20} y2={80} stroke="black" strokeWidth={8} />
    </Svg>
  );
}

function O() {
  return (
    <Svg height={80} width={80}>
      <Circle
        cx={40}
        cy={40}
        r={30}
        fill={"transparent"}
        stroke={"black"}
        strokeWidth={8}
      />
    </Svg>
  );
}

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
      {cellValue === "X" ? <X /> : cellValue === "O" ? <O /> : null}
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
