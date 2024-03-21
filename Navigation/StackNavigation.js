import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../Screens/HomeScreen";
import { FormScreen } from "../Screens/FormScreen";
import { MeetingMinutes } from "../Forms/MeetingMinutes";

const Stack = createNativeStackNavigator();

export const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Home" }}
        />

        <Stack.Screen
          name="Forms"
          component={FormScreen}
          options={{ title: "Forms" }}
        />

        <Stack.Screen
          name="MeetingMinutes"
          component={MeetingMinutes}
          options={{ title: "Consultor Meeting Minutes" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
