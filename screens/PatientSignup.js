import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  View,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const PatientSignup = () => {
  const [genderOpen, setGenderOpen] = useState(false);
  const [genderValue, setGenderValue] = useState("");
  const [genderItems, setGenderItems] = useState([
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
  ]);
  const navigation = useNavigation();

  return (
    <View style={styles.patientSignup}>
      <ImageBackground
        style={styles.logoIcon}
        resizeMode="contain"
        source={require("../assets/logo3.png")}
      />
      <Text style={styles.patientSignup1}>
        <Text style={styles.patientSignupTxtContainer}>
          <Text style={styles.patient}>Patient</Text>
          <Text style={styles.signupTypo}> Signup</Text>
        </Text>
      </Text>
      <TextInput
        style={[styles.name, styles.nameLayout]}
        placeholder="Enter Name"
        keyboardType="text"
      />
      <TextInput
        style={[styles.name, styles.nameLayout]}
        placeholder="Enter Number"
        keyboardType="default"
      />
      <TextInput
        style={[styles.name, styles.nameLayout]}
        placeholder="Enter Password"
        keyboardType="text"
        secureTextEntry
      />
      <View style={[styles.gender, styles.nameLayout]}>
        <DropDownPicker
          style={styles.dropdownpicker}
          open={genderOpen}
          setOpen={setGenderOpen}
          value={genderValue}
          setValue={setGenderValue}
          placeholder="Select Gender"
          items={genderItems}
          labelStyle={styles.genderValue}
          textStyle={styles.genderText}
          dropDownContainerStyle={styles.genderdropDownContainer}
        />
      </View>
      <TextInput
        style={[styles.name, styles.nameLayout]}
        placeholder="Age"
        keyboardType="text"
      />
      <TextInput
        style={[styles.name, styles.nameLayout]}
        placeholder="Address"
        keyboardType="text"
      />
      <TextInput
        style={[styles.name, styles.nameLayout]}
        placeholder="City"
        keyboardType="text"
      />
      <TextInput
        style={[styles.name, styles.nameLayout]}
        placeholder="State"
        keyboardType="text"
      />
      <TextInput
        style={[styles.name, styles.nameLayout]}
        placeholder="Pincode"
        keyboardType="numeric"
      />
      <Pressable style={styles.createbtn}>
        <Text style={[styles.create, styles.signupTypo]}>Create</Text>
      </Pressable>
      <Pressable
        style={styles.signinlink}
        onPress={() => navigation.navigate("PatientLogin")}
      >
        <Text style={styles.text}>
          <Text style={styles.alreadyHaveAn}>{`Already have an account? 
`}</Text>
          <Text style={styles.signIn}>Sign In</Text>
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  genderValue: {
    color: "#f15943",
  },
  genderText: {
    color: "#000",
  },
  genderdropDownContainer: {
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#0f6d65",
    borderWidth: 1,
  },
  nameLayout: {
    height: 46,
    alignSelf: "stretch",
    marginTop: 36,
  },
  signupTypo: {
    fontFamily: FontFamily.openSans,
    fontWeight: "700",
  },
  logoIcon: {
    width: 215,
    height: 68,
  },
  patient: {
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
  },
  patientSignupTxtContainer: {
    lineBreak: "anywhere",
    width: "100%",
  },
  patientSignup1: {
    fontSize: FontSize.size_3xl,
    display: "flex",
    width: 201,
    marginTop: 36,
    textAlign: "center",
    color: Color.darkslateblue_100,
    alignItems: "center",
  },
  name: {
    borderBottomWidth: 2,
    borderBottomColor: "#0F6D65",
    backgroundColor: Color.white,
  },
  dropdownpicker: {
    borderColor: "#0f6d65",
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.white,
  },
  gender: {
    borderStyle: "solid",
  },
  create: {
    fontSize: FontSize.size_xl,
    color: Color.white,
    textAlign: "center",
    flex: 1,
  },
  createbtn: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.tomato,
    shadowColor: "rgba(15, 109, 101, 0.49)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_6xs,
    alignSelf: "stretch",
    marginTop: 36,
  },
  alreadyHaveAn: {
    color: Color.dimgray,
  },
  signIn: {
    color: Color.darkslateblue_100,
  },
  text: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.openSansRegular,
    height: 55,
    alignSelf: "stretch",
    textAlign: "center",
  },
  signinlink: {
    marginTop: 36,
  },
  patientSignup: {
    overflow: "hidden",
    paddingHorizontal: Padding.p_3xl,
    paddingTop: Padding.p_33xl,
    paddingBottom: Padding.p_69xl,
    alignItems: "center",
    width: "100%",
    flex: 1,
    backgroundColor: Color.white,
  },
});

export default PatientSignup;
