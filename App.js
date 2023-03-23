import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import DailyTransactions from "./components/DailyTransactions";
import SearchBar from "./components/SearchBar";
import { useState } from "react";

export default function App() {
  const [allDaysTransactions] = useState([
    {
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
      <ScrollView>
        <SearchBar />
        {allDaysTransactions.map((day) => (
          <DailyTransactions date={day.date} transactions={day.transactions} />
        ))}
      </ScrollView>
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
