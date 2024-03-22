import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, Button } from "react-native";
import { useForm, Controller } from "react-hook-form";
import RNPickerSelect from "react-native-picker-select";
import { jobs as initialJobs, users } from "../assets/usersData";

export const RoleList = ({ navigation }) => {
  const [editMode, setEditMode] = useState(false);
  const [jobs, setJobs] = useState(initialJobs);
  const { control, handleSubmit, reset, setValue } = useForm({
    defaultValues: {
      jobs: initialJobs.map((job) => ({ ...job, assignedUsers: [] })),
    },
  });

  const onSubmit = (formData) => {
    setJobs(formData.jobs); // Update the main job state with the form data
    setEditMode(false); // Exit edit mode
    reset(formData); // Reset form with the new data to prevent stale state
  };

  const handleRemoveLastUser = (jobIndex) => {
    const allJobs = getValues("jobs");
    const updatedUsers = allJobs[jobIndex].assignedUsers.slice(0, -1); // Remove the last user from the selected job
    setValue(`jobs[${jobIndex}].assignedUsers`, updatedUsers);
  };

  const renderJobItem = ({ item, index }) => {
    return (
      <View style={styles.jobContainer}>
        <Text style={styles.jobTitle}>{item.title}</Text>
        {item.assignedUsers &&
          item.assignedUsers.map((userId, uIndex) => (
            <Text key={uIndex} style={styles.assignedUser}>
              {users.find((user) => user.id === userId)?.name ||
                "User not found"}
            </Text>
          ))}
        {editMode && (
          <Controller
            control={control}
            name={`jobs[${index}].assignedUsers`}
            render={({ field }) => (
              <RNPickerSelect
                onValueChange={(userId) => {
                  // Append the selected user to the job's assignedUsers array in the form
                  const updatedUsers = [...field.value, userId];
  
                  field.onChange(updatedUsers); // Update form value
                  // Also update the main jobs state to reflect changes immediately
                  const updatedJobs = [...jobs];
                  updatedJobs[index].assignedUsers = updatedUsers;
                  setJobs(updatedJobs);
                }}
                items={users.map((user) => ({
                  label: user.name,
                  value: user.id,
                }))}
                style={pickerSelectStyles}
                placeholder={{ label: "Select a user", value: null }}
              />
            )}
          />
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {editMode ? (
        <Button title="Submit Assignments" onPress={handleSubmit(onSubmit)} />
      ) : (
        <Button title="Assign Roles" onPress={() => setEditMode(true)} />
      )}
      <FlatList
        data={jobs}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderJobItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  jobContainer: {
    padding: 20,
    marginVertical: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  assignedUser: {
    fontSize: 16,
    marginTop: 5,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
    marginBottom: 10, // Add spacing below the picker
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: "purple",
    borderRadius: 8,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
    marginBottom: 10, // Add spacing below the picker
  },
});
