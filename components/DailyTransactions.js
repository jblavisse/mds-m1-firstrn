import { StyleSheet, View, Text } from "react-native";
import Transaction from "./Transaction";

export default function DailyTransactions({ date, transactions }) {
  return (
    <View>
      <Text style={styles.date}>{date}</Text>
      <View style={styles.transactions}>
        {transactions.map((transaction) => (
          <Transaction
            type={transaction.type}
            category={transaction.category}
            price={transaction.price}
          />
        ))}
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
