import { StyleSheet, View, Text } from "react-native";
import React from "react";

export default function Transaction({ type, price, category }) {
  return (
    <View style={styles.container}>
      <View style={styles.transaction}>
        <View style={styles.transactionText}>
          <Text>{type}</Text>
          <Text style={styles.category}>{category}</Text>
        </View>

        <Text>{price}€</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
  },
  transaction: {
    backgroundColor: "#fff",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "#ddd",
    borderBottomWidth: 1,
    width: "90%",
    padding: 10,
  },
  category: {
    fontSize: 12,
    color: "#999",
  },
});
