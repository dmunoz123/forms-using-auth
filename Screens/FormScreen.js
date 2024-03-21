import { Button, Text, View } from "react-native";

export const FormScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Forms Screen</Text>
      <Button
        title="Consultor Meeting Minutes Form"
        onPress={() => navigation.navigate("MeetingMinutes")}
      />
      <Button color={"#76F407"}></Button>
      <Button color={"#0724F4"}></Button>
      <Button color={"#F407E6"}></Button>
    </View>
  );
};
