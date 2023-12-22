import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useReducer } from "react";

import make2DArray from "./make2DArray";
import Board from "./Board";

import copy2DArray from "./copy2DArray";

function reducer(state, action) {
  switch (action.type) {
    case "make-move": {
      if (state.board[action.rowIndex][action.columnIndex] !== null) {
        return {
          ...state,
        };
      }
      const newBoard = copy2DArray(state.board);
      newBoard[action.rowIndex][action.columnIndex] = state.player;
      return {
        ...state,
        board: newBoard,
        player: state.player === "X" ? "O" : "X",
      };
    }
  }
  return state;
}

function makeState() {
  return { board: make2DArray(3, 3, null), player: "X" };
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, undefined, makeState);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Board board={state.board} dispatch={dispatch} />
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
