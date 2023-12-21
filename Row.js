import { View, Text, StyleSheet } from "react-native";

import Cell from "./Cell";

export default function Row(props) {
  return (
    <View style={styles.container}>
      {props.row.map((cell) => {
        return <Cell cell={cell} />;
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
