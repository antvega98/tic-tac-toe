import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { useReducer } from "react";

import make2DArray from "./make2DArray";
import Board from "./Board";

import copy2DArray from "./copy2DArray";
import computeResult from "./computeResult";
import GameDescription from "./GameDescription";

function reducer(state, action) {
  switch (action.type) {
    case "make-move": {
      if (state.gameOver) {
        return state;
      }

      const newBoard = copy2DArray(state.board);
      newBoard[action.rowIndex][action.columnIndex] =
        state.moveCount % 2 === 0 ? "X" : "O";

      const { isGameOver, winner } = computeResult(newBoard);
      return {
        ...state,
        board: newBoard,
        moveCount: state.moveCount + 1,
        isGameOver: isGameOver,
        winner: winner,
      };
    }
    case "reset-game": {
      return makeState();
    }
  }
  return state;
}

function makeState() {
  return {
    board: make2DArray(3, 3, null),
    moveCount: 0,
    isGameOver: false,
    winner: null,
  };
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, undefined, makeState);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Board board={state.board} dispatch={dispatch} />
      {state.isGameOver && (
        <TouchableOpacity
          style={styles.newGameButton}
          onPress={() => dispatch({ type: "reset-game" })}
        >
          <Text style={styles.newGameButtonText}>New Game</Text>
        </TouchableOpacity>
      )}
      <GameDescription
        winner={state.winner}
        isGameOver={state.isGameOver}
        moveCount={state.moveCount}
      />
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
  newGameButton: {
    position: "absolute",
    bottom: 100,
    padding: 12,
    borderRadius: 8,
    backgroundColor: "blue",
  },
  newGameButtonText: {
    fontSize: 20,
    color: "white",
  },
});
