import * as React from "react";
import {
  ImageBackground,
  StyleSheet,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const StartingScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.startingScreen}>
      <ImageBackground
        style={styles.logoIcon}
        resizeMode="cover"
        source={require("../assets/logo.png")}
      />
      <TouchableOpacity
        style={[styles.patientloginbtn, styles.patientloginFlexBox]}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("PatientLogin")}
      >
        <Text style={[styles.patientlogin, styles.patientloginFlexBox]}>
          Patient Login
        </Text>
      </TouchableOpacity>
      <Pressable
        style={[styles.patientloginbtn, styles.patientloginFlexBox]}
        onPress={() => navigation.navigate("DoctorLogin")}
      >
        <Text style={[styles.patientlogin, styles.patientloginFlexBox]}>
          Doctor Login
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  patientloginFlexBox: {
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
  },
  logoIcon: {
    width: 250,
    height: 120,
  },
  patientlogin: {
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    fontFamily: FontFamily.openSansBold,
    color: Color.white,
    textAlign: "center",
    display: "flex",
    height: 25,
  },
  patientloginbtn: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.teal_100,
    height: 97,
    marginTop: 70,
  },
  startingScreen: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    paddingHorizontal: 39,
    paddingTop: 127,
    paddingBottom: 163,
    alignItems: "center",
  },
});

export default StartingScreen;
