import { StyleSheet, View, Text } from "react-native";
import React from "react";
import Transaction from "./Transaction";

export default function DailyTransactions() {
  return (
    <View>
      <Text style={styles.date}>Lundi 23 mars 2023</Text>
      <View style={styles.transactions}>
        <Transaction type="Docteur Labitte" category="médecin" price="25" />
        <Transaction type="Vinted" category="vêtements" price="4.63" />
        <Transaction type="Leclerc" category="supermarché" price="78.29" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  date: {
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  transactions: {
    backgroundColor: "#fff",
  },
});
