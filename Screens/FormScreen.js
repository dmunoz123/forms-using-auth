import React from "react";
import {
  ImageBackground,
  ScrollView,
  Button,
  Text,
  View,
  StyleSheet,
} from "react-native";
import ImageView from "react-native-image-viewing";

export const FormScreen = ({ navigation }) => {
  const images = [
    require("../assets/pg1.png"),
    require("../assets/pg2.png"),
    require("../assets/pg3.png"),
    require("../assets/pg4.png"),
    require("../assets/pg5.png"),
  ];

  const [visible, setIsVisible] = React.useState(false);

  return (
    <ScrollView
      style={styles.screenContainer}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <ImageBackground
        source={require("../assets/lmu2.png")}
        style={styles.banner}
        imageStyle={{ resizeMode: "cover", alignSelf: "flex-start" }}
      >
        <Text style={styles.greetingText}>
          Good afternoon Jesuit community at LMU, today is Friday, March 22nd.
          Here are the forms for the day!
        </Text>
      </ImageBackground>

      <View style={styles.formsRowContainer}>
        {/* Left container */}
        <View style={styles.formsContainer}>
          <Text style={styles.containerTitle}>Fillable Forms</Text>
          <ScrollView contentContainerStyle={styles.formsList}>
            <View style={styles.buttonContainer}>
              <Button
                title="Consultor Meeting Minutes Form"
                onPress={() => navigation.navigate("MeetingMinutes")}
              />
            </View>
            {/* Example additional button with spacing */}
            <View style={styles.buttonContainer}>
              <Button
                title="Sunday Presiders"
                onPress={() => navigation.navigate("AnotherFormScreenName")}
              />
            </View>
            <View style={styles.buttonContainer}>
              <Button
                title="Jesuit Presiders"
                onPress={() => navigation.navigate("AnotherFormScreenName")}
              />
            </View>
          </ScrollView>
        </View>

        {/* Right Container */}
        <View style={styles.formsContainer}>
          <Text style={styles.containerTitle}>Community</Text>
          <ScrollView contentContainerStyle={styles.formsList}>
            <View style={styles.buttonContainer}>
              <Button
                title="Community Members"
                onPress={() => navigation.navigate("UserList")}
              />
            </View>
            <View style={styles.buttonContainer}>
              <Button
                title="Community Role"
                onPress={() => navigation.navigate("RoleList")}
              />
            </View>
          </ScrollView>
        </View>
      </View>

      <ImageView
        images={images}
        imageIndex={0}
        visible={visible}
        onRequestClose={() => setIsVisible(false)}
      />

      <View style={styles.buttonStyle}>
        <Button
          title="View our Housing Policies"
          color="#921F0C"
          onPress={() => setIsVisible(true)}
        ></Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: "#F5F1DD",
  },
  banner: {
    width: "100%",
    paddingTop: 10,
    paddingBottom: 120,
  },
  greetingText: {
    color: "#fff",
    fontSize: 23,
    alignSelf: "center",
    paddingHorizontal: 20, // Optional: adjust for text alignment
    fontStyle: "italic",
  },
  formsRowContainer: {
    flexDirection: "row", // Aligns the children (formsContainer) side by side
    justifyContent: "space-evenly", // Evenly spaces the containers
    alignItems: "flex-start", // Aligns containers to the start of the flex-direction
    width: "100%", // Takes full width to accommodate both containers
  },
  formsContainer: {
    width: "45%", // Adjust the width as needed
    maxHeight: "75%", // Adjust the height as needed
    alignSelf: "flex-start",
    marginTop: 60,
    alignItems: "center",
    marginLeft: 15,
    marginRight: 15,
    borderColor: "#ccc", // Border color for the forms container
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#f9f9f9", // Light background color for the forms container
    shadowColor: "#000", // Optional: shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // Optional: shadow for Android
  },
  formsList: {
    alignItems: "center", // Aligns buttons to the left
  },
  buttonContainer: {
    marginBottom: 10, // Adds spacing between the buttons
  },
  containerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20, // Adds spacing between the title and the first button
  },
  buttonStyle: {
    marginTop: 150,
    width: 200,
    alignContent: "center",
    alignSelf: "center",
  },
});


const jobs = [
  { id: 1, title: "Rector", assignedUsers: [] },
  { id: 2, title: "Admonitor", assignedUsers: [] },
  // Add the rest of the jobs
];