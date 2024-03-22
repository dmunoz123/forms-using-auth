import React, { useState } from "react"; // Correct import for useState
import {
  TouchableOpacity,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  ScrollView,
  StyleSheet,
} from "react-native";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import DateTimePicker from "react-native-ui-datepicker";
import dayjs from "dayjs";

export const MeetingMinutes = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    defaultValues: {
      openingPrayer: "",
      reviewOfMinutes: "",
      ministerUpdates: "",
      houseFinancials: "",
      theHouse: "",
      provinceNews: "",
      items: [{ title: "", detail: "" }],
      communityApp: "",
      calendar: "",
      jesuitRecruitment: "",
      personnel: "",
    },
  });
  const onSubmit = (data) => console.log(data);

  const handleCustomSubmit = () => {
    console.log(getValues()); // Logs all form values, bypassing validation
  };

  const { fields, append } = useFieldArray({
    control,
    name: "items",
  });

  return (
    <ScrollView>
      <View style={Styles.body}>
        <Text style={Styles.title}>Consultors Meeting Minutes</Text>
        {/* Question 1 */}
        <Text style={Styles.fieldHeading}>Opening Prayer</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              multiline
              autoCorrect
              style={Styles.field}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="openingPrayer"
        />
        {/* {errors.openingPrayer && <Text>This is required.</Text>} */}
        <Text style={Styles.fieldHeading}>Review of Minutes</Text>
        <Controller
          control={control}
          rules={{
            maxLength: 100,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              multiline
              autoCorrect
              style={Styles.field}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="reviewOfMinutes"
        />
        <Text style={Styles.fieldHeading}>Minsters Updates</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              multiline
              autoCorrect
              style={Styles.field}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="ministerUpdates"
        />
        <Text style={Styles.fieldHeading}>House Financials</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              multiline
              autoCorrect
              style={Styles.field}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="houseFinancials"
        />
        <Text style={Styles.fieldHeading}>
          Climate and Community of the House
        </Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              multiline
              autoCorrect
              style={Styles.field}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="theHouse"
        />
        {/* Question 6 */}
        <Text style={Styles.fieldHeading}>Province News</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              multiline
              autoCorrect
              style={Styles.field}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="provinceNews"
        />
        {/* Question 7 */}
        {fields.map((item, index) => (
          <View key={item.id}>
            <Text style={Styles.itemTitle}>• Item {index + 1}</Text>
            <Controller
              control={control}
              name={`items[${index}].title`}
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={Styles.field}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="Title"
                />
              )}
            />
            <Controller
              control={control}
              name={`items[${index}].detail`}
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  multiline
                  style={Styles.field}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="Details"
                />
              )}
            />
          </View>
        ))}
        <TouchableOpacity
          style={Styles.appendButton}
          onPress={() => append({ title: "", detail: "" })}
        >
          <Text style={Styles.appendButtonText}>Add Item</Text>
        </TouchableOpacity>

        {/* Question 8 */}
        <Text style={Styles.fieldHeading}>Community App</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              multiline
              autoCorrect
              style={Styles.field}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="communityApp"
        />
        {/* Question 9 */}
        <Text style={Styles.fieldHeading}>
          Calendar Updates and Upcoming Events
        </Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              multiline
              autoCorrect
              style={Styles.field}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="calendar"
        />
        {/* Question 10 */}
        <Text style={Styles.fieldHeading}>Jesuit Recruitment</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              multiline
              autoCorrect
              style={Styles.field}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="jesuitRecruitment"
        />
        <Text style={Styles.fieldHeading}>Personnel</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              multiline
              autoCorrect
              style={Styles.field}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="personnel"
        />
        <Button title="Submit" onPress={handleCustomSubmit} />
      </View>
    </ScrollView>
  );
};

const Styles = StyleSheet.create({
  body: {
    flexGrow: 1,
    backgroundColor: "#fff", // A maroon background for the entire form
    justifyContent: "space-between",
    paddingVertical: 20,
    width: "100%",
  },
  itemTitle: {
    fontSize: 16,
    paddingLeft: 10,
    color: "#000",
    fontWeight: "bold",
  },
  title: {
    marginBottom: 16,
    alignSelf: "center",
    paddingVertical: 8,
    color: "#276EAA", // White for better contrast and readability
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    width: "90%",
  },
  fieldHeading: {
    fontSize: 16, // Slightly larger for better visibility
    fontWeight: "bold",
    paddingLeft: 10,
    marginTop: 12,
    color: "#000000", // White for contrast against the maroon background
  },
  field: {
    backgroundColor: "#fff", // A soft beige for contrast
    borderWidth: 1,
    borderColor: "#000", // A softer border color
    borderRadius: 8, // Rounded corners for a modern look
    marginBottom: 12,
    padding: 10, // More spacious interior
    fontSize: 16, // Larger font size for readability
    fontWeight: "500", // Semi-bold for a cleaner appearance
    color: "#20232a", // Dark color for the text for contrast
  },
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
  },
  datePickerContainer: {
    alignSelf: "center",
    width: "50%", // Sets the DatePicker container to 50% of the parent width
  },
  selectedDateText: {
    alignSelf: "center",
    marginBottom: 16,
    fontSize: 16,
    color: "#FFFFFF", // Ensure this color matches your theme
  },
  appendButton: {
    alignSelf: "flex-start", // Aligns the button to the left
    backgroundColor: "#e7e7e7", // A less eye-catching color
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 4,
    marginLeft: 15, // Adjust as needed to align under the detail TextInput
    marginTop: 5,
  },
  appendButtonText: {
    color: "#333", // Dark text color for contrast
    fontSize: 14, // Smaller font size
  },
});
