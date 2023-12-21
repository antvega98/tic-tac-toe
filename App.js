import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useReducer } from "react";

import make2DArray from "./make2DArray";
import Board from "./Board";

function reducer(state, action) {
  return state;
}

function makeState() {
  return { board: make2DArray(3, 3, "O") };
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, undefined, makeState);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Board board={state.board} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
