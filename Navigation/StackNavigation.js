import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../Screens/HomeScreen";
import { FormScreen } from "../Screens/FormScreen";
import { MeetingMinutes } from "../Forms/MeetingMinutes";
import { UserProfile } from "../Components/UserProfile";
import { UserList } from "../Components/UserList";
import { RoleList } from "../Forms/CommunityRole";

import * as React from "react";
import { Button } from "react-native";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ANDROID_CLIENT_ID =
  "529268756415-rkptqemo4r09g2inubdssqoblnuvmctd.apps.googleusercontent.com";
const IOS_CLIENT_ID =
  "529268756415-7ne0nuqa2cp19uobhkjos5b7agkelr5n.apps.googleusercontent.com";
const WEB_CLIENT_ID =
  "529268756415-5uclr7f3r173o870k4h0stqmj81fp3b5.apps.googleusercontent.com";

WebBrowser.maybeCompleteAuthSession();

const Stack = createNativeStackNavigator();

export const MyStack = () => {
  const [userInfo, setUserInfo] = React.useState(null);

  //client IDs from .env
  const config = {
    androidClientId: ANDROID_CLIENT_ID,
    iosClientId: IOS_CLIENT_ID,
    webClientId: WEB_CLIENT_ID,
  };

  const [request, response, promptAsync] = Google.useAuthRequest(config);

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
          headerRight: () => (
            <Button
              title="sign in with google"
              onPress={() => {
                promptAsync();
              }}
            />
          ),
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
