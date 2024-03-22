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
import { sundaySchedule, sundayScheduleSchedule } from "../assets/usersData";

export const SundayScheduleForm = () => {
  const { control, handleSubmit, setValue } = useForm();
  const [editMode, setEditMode] = useState(false);
  const [schedule, setSchedule] = useState(sundaySchedule); // This will hold the schedule data

  // Function to handle form submission
  const onSubmit = (data) => {
    const updatedSchedule = schedule.map((item, index) => {
      return {
        ...item,
        shcMorning: data[`schedule[${index}].shcMorning`],
        shcEvening: data[`schedule[${index}].shcEvening`],
        leaveyNight: data[`schedule[${index}].leaveyNight`],
      };
    });

    setSchedule(updatedSchedule);
    setEditMode(false);
    console.log(updatedSchedule);
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
    if (!editMode) {
      // When entering edit mode, initialize form values with the current state for the correct fields
      schedule.forEach((item, index) => {
        setValue(`schedule[${index}].shcMorning`, item.shcMorning);
        setValue(`schedule[${index}].shcEvening`, item.shcEvening);
        setValue(`schedule[${index}].leaveyNight`, item.leaveyNight);
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
          <>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  style={styles.input}
                  placeholder="10:00 AM - SHC"
                />
              )}
              name={`schedule[${index}].shcMorning`}
              defaultValue={item.shcMorning}
            />
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  style={styles.input}
                  placeholder="8:00 PM - SHC"
                />
              )}
              name={`schedule[${index}].shcEvening`}
              defaultValue={item.shcEvening}
            />
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  style={styles.input}
                  placeholder="10:00 PM - Leavey"
                />
              )}
              name={`schedule[${index}].leaveyNight`}
              defaultValue={item.leaveyNight}
            />
          </>
        ) : (
          <>
            <Text style={styles.inputText}>
              {item.shcMorning ? `${item.shcMorning} - SHC` : "10:00 AM - SHC"}
            </Text>
            <Text style={styles.inputText}>
              {item.shcEvening ? `${item.shcEvening} - SHC` : "8:00 PM - SHC"}
            </Text>
            <Text style={styles.inputText}>
              {item.leaveyNight
                ? `${item.leaveyNight} - Leavey`
                : "10:00 PM - Leavey"}
            </Text>
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
  inputText: {
    fontSize: 16,
    marginVertical: 8, // Adjust as needed for spacing
    // Add any additional styling to match your design
  },
});
