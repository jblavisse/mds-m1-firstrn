import { StyleSheet, Text, TextInput, View } from "react-native";
import DailyTransactions from "./components/DailyTransactions";
import SearchBar from "./components/SearchBar";

export default function App() {
  return (
    <View style={styles.container}>
      <SearchBar />
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
