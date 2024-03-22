// UserProfile.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const UserProfile = ({
  name,
  email,
  phoneNumber,
  cellNumber,
  roomNumber,
  officeNumber,
  userType,
  route,
}) => {
  const { user } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{user.name}</Text>
      <Text>Email: {user.email}</Text>
      <Text>Phone: {user.phoneNumber}</Text>
      <Text>Cell: {user.cellNumber}</Text>
      <Text>Room #: {user.roomNumber}</Text>
      <Text>Office #: {user.officeNumber}</Text>
      <Text>Type: {user.userType}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 20,
    marginVertical: 8,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 3,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
