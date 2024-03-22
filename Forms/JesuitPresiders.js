import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  FlatList,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { initialSchedule } from "../assets/usersData";

export const JesuitScheduleForm = () => {
  const { control, handleSubmit, setValue } = useForm();
  const [editMode, setEditMode] = useState(false);
  const [schedule, setSchedule] = useState(initialSchedule); // This will hold the schedule data

  // Function to handle form submission
  const onSubmit = (data) => {
    // Map over the existing schedule to update presider and lector
    // while preserving the date and time of each entry
    const updatedSchedule = schedule.map((item, index) => {
      const presider = data[`schedule[${index}].presider`];
      const lector = data[`schedule[${index}].lector`];
      return { ...item, presider, lector };
    });

    setSchedule(updatedSchedule); // Update the schedule state with the new data
    setEditMode(false); // Exit edit mode
    console.log(updatedSchedule);
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
    if (!editMode) {
      // When entering edit mode, initialize form values with the current state
      schedule.forEach((item, index) => {
        setValue(`schedule[${index}].presider`, item.presider);
        setValue(`schedule[${index}].lector`, item.lector);
      });
    }
  };

  // Render a TextInput for each role on each day
  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.entryContainer}>
        <View style={styles.dateContainer}>
          <Text style={styles.dateTitle}>{item.date}</Text>
          <Text style={styles.timeText}>{item.time}</Text>
        </View>

        {editMode ? (
          // Render TextInput when in edit mode
          <>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  style={styles.input}
                  placeholder="Presider"
                />
              )}
              name={`schedule[${index}].presider`}
              defaultValue={item.presider}
            />
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  style={styles.input}
                  placeholder="Lector"
                />
              )}
              name={`schedule[${index}].lector`}
              defaultValue={item.lector}
            />
          </>
        ) : (
          // Display Text when not in edit mode
          <>
            <Text style={styles.input}>{item.presider || "Presider"}</Text>
            <Text style={styles.input}>{item.lector || "Lector"}</Text>
          </>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={schedule}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
      <Button
        title={editMode ? "Submit Assignments" : "Assign Roles"}
        onPress={editMode ? handleSubmit(onSubmit) : toggleEditMode}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  dateContainer: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  entryContainer: {
    // renamed from jobContainer
    padding: 20,
    marginVertical: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
  },
  dateTitle: {
    // renamed from jobTitle
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  timeText: {
    fontSize: 14, // smaller font size for the time
    color: "#666", // a muted color for the time
  },
  input: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    color: "black",
    marginBottom: 10, // Add spacing below the input
  },
});
