import React, { useState } from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { Input as RNKTextInput, Icon as RNKIcon } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Color, Padding } from "../GlobalStyles";

const Chemist = () => {
  const [searchBarTextInput, setSearchBarTextInput] = useState();
  const navigation = useNavigation();

  return (
    <View style={styles.chemist}>
      <View style={styles.topbar}>
        <View style={styles.backhome}>
          <Text style={styles.chemist1}>Chemist</Text>
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
      <View style={[styles.chemistcategorygroup, styles.searchbarmainFlexBox]}>
        <Pressable
          style={styles.labtest}
          onPress={() => navigation.navigate("DoctorList")}
        >
          <View style={[styles.labtestbg, styles.labtestbgLayout]} />
          <Text style={[styles.labtest1, styles.labtest1Typo]}>Lab Test</Text>
          <Image
            style={[styles.labtestimgIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/labtestimg.png")}
          />
        </Pressable>
        <View style={styles.labtest}>
          <View style={[styles.medicalstoresbg, styles.labtestbgLayout]} />
          <Text style={[styles.medicalstores1, styles.labtest1Typo]}>
            Medical Stores
          </Text>
          <Image
            style={[styles.medicalstoresimgIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/medicalstoresimg.png")}
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
  labtestbgLayout: {
    borderRadius: Border.br_mini,
    left: 0,
    top: 0,
    height: 120,
    width: 144,
    position: "absolute",
  },
  labtest1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
    fontSize: FontSize.size_sm,
    top: 97,
    color: Color.black,
    position: "absolute",
  },
  iconPosition: {
    height: 57,
    top: 12,
    position: "absolute",
  },
  chemist1: {
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
  labtestbg: {
    backgroundColor: Color.darksalmon,
  },
  labtest1: {
    left: 47,
  },
  labtestimgIcon: {
    width: 56,
    left: 47,
  },
  labtest: {
    height: 120,
    width: 144,
  },
  medicalstoresbg: {
    backgroundColor: Color.forestgreen,
  },
  medicalstores1: {
    left: 27,
  },
  medicalstoresimgIcon: {
    left: 42,
    width: 61,
  },
  chemistcategorygroup: {
    paddingHorizontal: Padding.p_11xl,
    paddingVertical: 0,
    justifyContent: "space-between",
    alignItems: "center",
  },
  chemist: {
    paddingBottom: Padding.p_smi,
    alignItems: "center",
    width: "100%",
    flex: 1,
    backgroundColor: Color.white,
  },
});

export default Chemist;
