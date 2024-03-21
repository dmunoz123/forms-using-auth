import { Button, Text, View } from "react-native";

export const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="View Forms"
        onPress={() => navigation.navigate("Forms")}
      />
    </View>
  );
};
