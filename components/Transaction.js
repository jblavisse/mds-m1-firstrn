import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function Transaction({ type, price, category }) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.transaction}
        onPress={() =>
          navigation.navigate("Transaction", {
            type: type,
            price: price,
            category: category,
          })
        }
      >
        <View style={styles.transactionText}>
          <Text>{type}</Text>
          <Text style={styles.category}>{category}</Text>
        </View>

        <Text>{price}€</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flexDirection: "row",
  },
  transaction: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
