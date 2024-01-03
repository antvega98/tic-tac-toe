import { View, Text } from "react-native";

export default function GameDescription({ winner, isGameOver, moveCount }) {
  const text = (() => {
    if (!isGameOver) {
      const curPlayer = moveCount % 2 === 0 ? "X" : "O";
      return `${curPlayer} to move.`;
    }

    if (winner == null) {
      return "Draw!";
    }

    return `${winner} wins!`;
  })();
  return (
    <View>
      <Text>{text}</Text>
    </View>
  );
}
