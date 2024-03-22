import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../Screens/HomeScreen";
import { FormScreen } from "../Screens/FormScreen";
import { MeetingMinutes } from "../Forms/MeetingMinutes";
import { UserProfile } from "../Components/UserProfile";
import { UserList } from "../Components/UserList";
import { RoleList } from "../Forms/CommunityRole";

const Stack = createNativeStackNavigator();

export const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#fff",
          },
          headerTintColor: "#276EAA",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Announcements",
          }}
        />

        <Stack.Screen
          name="Forms"
          component={FormScreen}
          options={{ title: "Forms" }}
        />

        <Stack.Screen
          name="MeetingMinutes"
          component={MeetingMinutes}
          options={{ title: "" }}
        />

        <Stack.Screen
          name="UserList"
          component={UserList}
          options={{ title: "" }}
        />

        <Stack.Screen
          name="UserProfile"
          component={UserProfile}
          options={{ title: "" }}
        />

        <Stack.Screen
          name="RoleList"
          component={RoleList}
          options={{ title: "" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
