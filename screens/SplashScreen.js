import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { Padding } from "../GlobalStyles";

const SplashScreen = () => {
  return (
    <View style={[styles.splashScreen, styles.splashScreenLayout]}>
      <Image
        style={[styles.splashscreenlogoIcon, styles.splashScreenLayout]}
        contentFit="cover"
        source={require("../assets/splashscreenlogo.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  splashScreenLayout: {
    width: "100%",
    flex: 1,
  },
  splashscreenlogoIcon: {
    alignSelf: "stretch",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  splashScreen: {
    borderRadius: 50,
    backgroundColor: "#f8f9fb",
    height: 510,
    flexDirection: "row",
    paddingHorizontal: Padding.p_6xl,
    paddingVertical: 0,
    alignItems: "flex-end",
    justifyContent: "center",
  },
});

export default SplashScreen;
