import { Alert, Button, StyleSheet, TextInput, View } from "react-native";
import React, { useState } from "react";

export default function SearchBar() {
  const [searchText, setSearchText] = useState("");

  function handlePress() {
    Alert.alert(`Recherche de transaction "${searchText}" en cours...`);
    console.log(`Recherche de transaction "${searchText}" en cours...`);
  }

  return (
    <View style={styles.searchbar}>
      <TextInput
        style={styles.bar}
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />
      <Button
        style={styles.btn}
        title="Rechercher"
        color="#50baff"
        onPress={handlePress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
  bar: {
    width: "75%",
    backgroundColor: "#fff",
    padding: 5,
  },
  btn: {
    width: "25%",
  },
});
