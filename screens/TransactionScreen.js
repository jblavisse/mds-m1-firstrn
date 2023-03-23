import { View, Text } from "react-native";
import React from "react";

export default function TransactionScreen({ route }) {
  return (
    <View>
      <Text>{route.params.type}</Text>
      <Text>{route.params.price}</Text>
      <Text>{route.params.category}</Text>
    </View>
  );
}
