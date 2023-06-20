import React, { useState } from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { Input as RNKTextInput, Icon as RNKIcon } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Color, Padding } from "../GlobalStyles";

const Nurses = () => {
  const [searchBarTextInput, setSearchBarTextInput] = useState();
  const navigation = useNavigation();

  return (
    <View style={styles.nurses}>
      <View style={styles.topbar}>
        <View style={styles.backhome}>
          <Text style={styles.nurses1}>Nurses</Text>
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
      <View style={[styles.searchbarmain, styles.searchbarmainFlexBox]}>
        <RNKTextInput
          style={styles.searchbar}
          placeholder="Search Doctor"
          value={searchBarTextInput}
          onChangeText={setSearchBarTextInput}
          accessoryLeft={<RNKIcon name="magnify" pack="material" />}
        />
      </View>
      <View style={[styles.nursescategrygroup, styles.searchbarmainFlexBox]}>
        <Pressable
          style={styles.oldagehome}
          onPress={() => navigation.navigate("DoctorList")}
        >
          <View style={[styles.oldagehomebg, styles.oldagehomebgLayout]} />
          <Text
            style={[styles.oldagehome1, styles.oldagehome1Typo]}
          >{`Old-Age Home
Nurses`}</Text>
          <Image
            style={[styles.oldagehomeimgIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/oldagehomeimg.png")}
          />
        </Pressable>
        <View style={styles.oldagehome}>
          <View style={[styles.homenursesbg, styles.oldagehomebgLayout]} />
          <Text style={[styles.homenurses1, styles.oldagehome1Typo]}>
            Home Nurses
          </Text>
          <Image
            style={[styles.homenursesimgIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/homenursesimg.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchbarmainFlexBox: {
    marginTop: 33,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  oldagehomebgLayout: {
    borderRadius: Border.br_mini,
    left: 0,
    top: 0,
    height: 120,
    width: 144,
    position: "absolute",
  },
  oldagehome1Typo: {
    fontFamily: FontFamily.openSansRegular,
    fontSize: FontSize.size_sm,
    top: 77,
    textAlign: "center",
    color: Color.black,
    position: "absolute",
  },
  iconPosition: {
    height: 57,
    top: 12,
    position: "absolute",
  },
  nurses1: {
    top: -1,
    left: 28,
    fontSize: FontSize.size_lg,
    fontWeight: "700",
    fontFamily: FontFamily.openSansBold,
    textAlign: "center",
    color: Color.black,
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
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_mid,
    flexDirection: "row",
    alignSelf: "stretch",
    backgroundColor: Color.white,
  },
  searchbar: {
    borderColor: "0F6D65",
    alignSelf: "stretch",
    flex: 1,
    backgroundColor: Color.white,
  },
  searchbarmain: {
    overflow: "hidden",
    padding: Padding.p_mini,
    backgroundColor: Color.white,
  },
  oldagehomebg: {
    backgroundColor: Color.darksalmon,
  },
  oldagehome1: {
    left: 24,
  },
  oldagehomeimgIcon: {
    left: 42,
    width: 61,
  },
  oldagehome: {
    height: 120,
    width: 144,
  },
  homenursesbg: {
    backgroundColor: Color.forestgreen,
  },
  homenurses1: {
    left: 27,
  },
  homenursesimgIcon: {
    left: 47,
    width: 51,
  },
  nursescategrygroup: {
    paddingHorizontal: Padding.p_11xl,
    paddingVertical: 0,
    justifyContent: "space-between",
    alignItems: "center",
  },
  nurses: {
    paddingBottom: Padding.p_smi,
    alignItems: "center",
    width: "100%",
    flex: 1,
    backgroundColor: Color.white,
  },
});

export default Nurses;
