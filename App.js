import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { useReducer } from "react";

import make2DArray from "./make2DArray";
import Board from "./Board";

import copy2DArray from "./copy2DArray";

function reducer(state, action) {
  switch (action.type) {
    case "make-move": {
      const newBoard = copy2DArray(state.board);
      newBoard[action.rowIndex][action.columnIndex] =
        state.moveCount % 2 === 0 ? "X" : "O";
      return {
        ...state,
        board: newBoard,
        moveCount: state.moveCount + 1,
      };
    }
    case "reset-game": {
      return makeState();
    }
  }
  return state;
}

function makeState() {
  return { board: make2DArray(3, 3, null), moveCount: 0 };
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, undefined, makeState);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Board board={state.board} dispatch={dispatch} />
      {state.moveCount === 9 && (
        <Button
          title="New Game"
          onPress={() => dispatch({ type: "reset-game" })}
        ></Button>
      )}
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
