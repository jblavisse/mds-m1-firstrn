import { FlatList, StyleSheet, View } from "react-native";
import { useState } from "react";
import DailyTransactions from "../components/DailyTransactions";

export default function HomeScreen({ navigation }) {
  const [allDaysTransactions] = useState([
    {
      id: 1,
      date: "Lundi 23 mars 2023",
      transactions: [
        { type: "Netflix", category: "Loisirs", price: 9.99 },
        { type: "Netflix", category: "Loisirs", price: 9.99 },
        { type: "Netflix", category: "Loisirs", price: 9.99 },
        { type: "Netflix", category: "Loisirs", price: 9.99 },
        { type: "Netflix", category: "Loisirs", price: 9.99 },
        { type: "Netflix", category: "Loisirs", price: 9.99 },
      ],
    },
    {
      id: 2,
      date: "Dimanche 22 mars 2023",
      transactions: [
        { type: "McDonald's", category: "Restaurants", price: 14.79 },
        {
          type: "Starbucks",
          category: "Restaurants",
          price: 3.29,
        },
      ],
    },
    {
      id: 3,
      date: "Samedi 21 mars 2023",
      transactions: [
        { type: "Amazon", category: "Shopping", price: 29.39 },
        { type: "Amazon", category: "Shopping", price: 29.39 },
        { type: "Amazon", category: "Shopping", price: 29.39 },
        { type: "Amazon", category: "Shopping", price: 29.39 },
        { type: "Amazon", category: "Shopping", price: 29.39 },
        { type: "Amazon", category: "Shopping", price: 29.39 },
        { type: "Amazon", category: "Shopping", price: 29.39 },
        { type: "Amazon", category: "Shopping", price: 29.39 },
        { type: "Amazon", category: "Shopping", price: 29.39 },
        { type: "Amazon", category: "Shopping", price: 29.39 },
        { type: "Amazon", category: "Shopping", price: 29.39 },
        { type: "Amazon", category: "Shopping", price: 29.39 },
      ],
    },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        data={allDaysTransactions}
        renderItem={({ item }) => (
          <DailyTransactions
            date={item.date}
            transactions={item.transactions}
          />
        )}
        keyExtractor={(day) => day.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ddd",
    marginTop: 20,
    flex: 1,
  },
});
