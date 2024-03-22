// UserList.js
import React from "react";
import {
  FlatList,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
} from "react-native";
import { UserProfile } from "./UserProfile";
import { users } from "../assets/usersData";

// Example user data - this would be fetched from your database


export const UserList = ({ navigation }) => {
  

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("UserProfile", { user: item })}
      style={styles.itemContainer}
    >
      <Text style={styles.name}>{item.name}</Text>
      {/* Display other details you want visible in the list */}
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={users}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: "#E0E0E0",
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#212121",
    flex: 1, // Take up all available space
  },
});
