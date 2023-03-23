import { StyleSheet, Text, View } from "react-native";
import DailyTransactions from "./components/DailyTransactions";
import Transaction from "./components/Transaction";

export default function App() {
  return (
    <View style={styles.container}>
      <DailyTransactions />
      <DailyTransactions />
      <DailyTransactions />
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
