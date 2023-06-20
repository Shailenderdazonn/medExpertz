import React, { useState } from "react";
import { Pressable, Text, StyleSheet, View, TextInput } from "react-native";
import { Image } from "expo-image";
import DropDownPicker from "react-native-dropdown-picker";
import { TextInput as RNPTextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const BookAppointment = () => {
  const [departmentOpen, setDepartmentOpen] = useState(false);
  const [departmentValue, setDepartmentValue] = useState("");
  const [departmentItems, setDepartmentItems] = useState([
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
  ]);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [servicesValue, setServicesValue] = useState("");
  const [servicesItems, setServicesItems] = useState([
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
  ]);
  const navigation = useNavigation();

  return (
    <Pressable style={styles.bookAppointment}>
      <View style={[styles.topbar, styles.topbarShadowBox]}>
        <View style={styles.backhome}>
          <Text style={styles.bookappointment}>Book Appointment</Text>
          <Pressable
            style={styles.backarrow}
            onPress={() => navigation.navigate("Home")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/backarrow.png")}
            />
          </Pressable>
        </View>
      </View>
      <View style={styles.bookappointmentcontainer}>
        <View style={styles.department}>
          <DropDownPicker
            style={styles.dropdownpicker}
            open={departmentOpen}
            setOpen={setDepartmentOpen}
            value={departmentValue}
            setValue={setDepartmentValue}
            placeholder="Select Department"
            items={departmentItems}
            labelStyle={styles.departmentValue}
            textStyle={styles.departmentText}
            dropDownContainerStyle={styles.departmentdropDownContainer}
          />
        </View>
        <View style={[styles.services, styles.nameSpaceBlock]}>
          <DropDownPicker
            style={styles.dropdownpicker}
            open={servicesOpen}
            setOpen={setServicesOpen}
            value={servicesValue}
            setValue={setServicesValue}
            placeholder="Select Services"
            items={servicesItems}
            labelStyle={styles.servicesValue}
            textStyle={styles.servicesText}
            dropDownContainerStyle={styles.servicesdropDownContainer}
          />
        </View>
        <TextInput
          style={[styles.name, styles.nameSpaceBlock]}
          placeholder="Enter Name"
          keyboardType="text"
        />
        <TextInput
          style={[styles.name, styles.nameSpaceBlock]}
          placeholder="Phone Number"
          keyboardType="text"
        />
        <RNPTextInput
          style={[styles.name, styles.nameSpaceBlock]}
          placeholder="Date"
          mode="flat"
          right={
            <RNPTextInput.Icon
              style={{ marginTop: "50%" }}
              name="calendar-month"
            />
          }
          theme={{ colors: { background: "#fff" } }}
        />
        <RNPTextInput
          style={[styles.name, styles.nameSpaceBlock]}
          placeholder="Time"
          mode="flat"
          right={
            <RNPTextInput.Icon
              style={{ marginTop: "50%" }}
              name="clock-outline"
            />
          }
          theme={{ colors: { background: "#fff" } }}
        />
        <TextInput
          style={[styles.name, styles.nameSpaceBlock]}
          placeholder="Message"
          keyboardType="text"
          multiline
        />
        <View style={[styles.spacer, styles.nameSpaceBlock]} />
        <Pressable style={[styles.bookappointmentbtn, styles.nameSpaceBlock]}>
          <Text style={styles.bookappointment1}>Book Appointment</Text>
        </Pressable>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  departmentValue: {
    color: "#f15943",
  },
  departmentText: {
    color: "#000",
  },
  departmentdropDownContainer: {
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#0f6d65",
    borderWidth: 1,
  },
  servicesValue: {
    color: "#f15943",
  },
  servicesText: {
    color: "#000",
  },
  servicesdropDownContainer: {
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#0f6d65",
    borderWidth: 1,
  },
  topbarShadowBox: {
    flexDirection: "row",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  nameSpaceBlock: {
    marginTop: 10,
    alignSelf: "stretch",
  },
  bookappointment: {
    top: -1,
    left: 24,
    fontSize: FontSize.size_lg,
    fontWeight: "700",
    fontFamily: FontFamily.openSansBold,
    color: Color.black,
    textAlign: "center",
    position: "absolute",
  },
  icon: {
    marginTop: -15.5,
    height: "100%",
    width: "100%",
  },
  backarrow: {
    left: 1,
    top: "50%",
    width: 23,
    height: 22,
    position: "absolute",
  },
  backhome: {
    height: 31,
    flex: 1,
  },
  topbar: {
    borderRadius: Border.br_mid,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_mid,
    alignSelf: "stretch",
    backgroundColor: Color.white,
  },
  dropdownpicker: {
    borderColor: "#0f6d65",
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.white,
  },
  department: {
    height: 46,
    borderStyle: "solid",
    alignSelf: "stretch",
  },
  services: {
    height: 46,
    borderStyle: "solid",
  },
  name: {
    borderBottomWidth: 2,
    borderBottomColor: "#0F6D65",
    height: 46,
    backgroundColor: Color.white,
  },
  spacer: {
    height: 10,
    backgroundColor: Color.white,
  },
  bookappointment1: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.openSansRegular,
    color: Color.white,
    textAlign: "center",
    flex: 1,
  },
  bookappointmentbtn: {
    borderRadius: 20,
    backgroundColor: Color.tomato,
    shadowColor: "rgba(15, 109, 101, 0.49)",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_2xs,
    flexDirection: "row",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  bookappointmentcontainer: {
    paddingHorizontal: Padding.p_6xl,
    paddingBottom: 36,
    marginTop: 25,
    alignSelf: "stretch",
  },
  bookAppointment: {
    width: "100%",
    flex: 1,
    backgroundColor: Color.white,
  },
});

export default BookAppointment;
