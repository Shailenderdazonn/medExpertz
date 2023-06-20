import * as React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  Pressable,
  View,
} from "react-native";
import { TextInput as RNPTextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const PatientLogin = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.patientLogin}>
      <ImageBackground
        style={styles.logoIcon}
        resizeMode="contain"
        source={require("../assets/logo4.png")}
      />
      <Text style={[styles.patientLogin1, styles.loginTypo]}>
        Patient Login
      </Text>
      <RNPTextInput
        style={styles.email}
        placeholder="Enter Email"
        mode="flat"
        left={<RNPTextInput.Icon style={{ marginTop: "50%" }} name="email" />}
        underlineColor="#f15943"
        activeUnderlineColor="#0f6d65"
        theme={{ colors: { background: "#fff" } }}
      />
      <RNPTextInput
        style={styles.email}
        placeholder="Enter Password"
        mode="flat"
        underlineColor="#f15943"
        activeUnderlineColor="#0f6d65"
        theme={{ colors: { background: "#fff" } }}
      />
      <Pressable
        style={styles.loginbtn}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={[styles.login, styles.loginTypo]}>Log In</Text>
      </Pressable>
      <Pressable
        style={styles.signuplink}
        onPress={() => navigation.navigate("PatientSignup")}
      >
        <Text style={styles.text}>
          <Text style={styles.dontHaveAn}>{`Don't have an account? `}</Text>
          <Text style={styles.signUp}>Sign Up</Text>
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  loginTypo: {
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    textAlign: "center",
  },
  logoIcon: {
    height: 161,
    alignSelf: "stretch",
  },
  patientLogin1: {
    fontSize: FontSize.size_3xl,
    marginTop: 36,
    textAlign: "center",
    color: Color.darkslateblue_100,
  },
  email: {
    height: 46,
    marginTop: 36,
    alignSelf: "stretch",
    backgroundColor: Color.white,
  },
  login: {
    fontSize: FontSize.size_xl,
    color: Color.white,
    textAlign: "center",
    flex: 1,
  },
  loginbtn: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.teal_100,
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_6xs,
    marginTop: 36,
    alignSelf: "stretch",
  },
  dontHaveAn: {
    color: Color.dimgray,
  },
  signUp: {
    color: Color.darkslateblue_100,
  },
  text: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.openSansRegular,
    textAlign: "center",
    alignSelf: "stretch",
  },
  signuplink: {
    marginTop: 36,
  },
  patientLogin: {
    width: "100%",
    overflow: "hidden",
    paddingHorizontal: Padding.p_3xl,
    paddingTop: Padding.p_33xl,
    paddingBottom: Padding.p_69xl,
    alignItems: "center",
    flex: 1,
    backgroundColor: Color.white,
  },
});

export default PatientLogin;
