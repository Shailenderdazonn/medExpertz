import * as React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  Pressable,
  TouchableOpacity,
  View,
} from "react-native";
import { TextInput as RNPTextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const DoctorLogin = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.doctorLogin}>
      <ImageBackground
        style={styles.logoIcon}
        resizeMode="contain"
        source={require("../assets/logo2.png")}
      />
      <Text style={[styles.doctorLogin1, styles.loginTypo]}>Doctor Login</Text>
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
      <TouchableOpacity
        style={styles.loginbtn}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={[styles.login, styles.loginTypo]}>Log In</Text>
      </TouchableOpacity>
      <Pressable
        style={styles.signuplink}
        onPress={() => navigation.navigate("DoctorSignup")}
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
    fontWeight: "700",
    textAlign: "center",
  },
  logoIcon: {
    height: 161,
    alignSelf: "stretch",
  },
  doctorLogin1: {
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.openSansBold,
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
    fontFamily: FontFamily.openSans,
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
  doctorLogin: {
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

export default DoctorLogin;
