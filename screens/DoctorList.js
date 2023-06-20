import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const DoctorList = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.doctorList}>
      <View style={styles.topbar}>
        <View style={styles.backhome}>
          <Text style={styles.doctorlist}>Doctor List</Text>
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
      <View style={styles.doctorCard}>
        <Image
          style={[styles.doctorimageIcon, styles.doctorimageIconLayout]}
          contentFit="cover"
          source={require("../assets/doctorimage.png")}
        />
        <View style={styles.doctordetails}>
          <View style={[styles.spacer, styles.spacerPosition1]} />
          <Text style={styles.available}>Available</Text>
          <View style={[styles.spacer1, styles.spacerPosition1]} />
          <Text style={[styles.specialization, styles.doctornameTypo]}>
            Specialization
          </Text>
          <View style={[styles.spacer2, styles.spacerPosition1]} />
          <Text style={[styles.doctorname, styles.doctornameTypo]}>
            Dr. Ragav
          </Text>
        </View>
      </View>
      <View style={styles.doctorCardShadowBox}>
        <Image
          style={[styles.doctorimageIcon1, styles.doctorimageIconLayout]}
          contentFit="cover"
          source={require("../assets/doctorimage1.png")}
        />
        <View style={styles.doctordetails1}>
          <View style={[styles.spacer3, styles.spacerPosition]} />
          <Text style={[styles.available1, styles.available1Typo]}>
            Available
          </Text>
          <View style={[styles.spacer4, styles.spacerPosition]} />
          <Text style={[styles.specialization1, styles.available1Typo]}>
            Specialization
          </Text>
          <View style={[styles.spacer5, styles.spacerPosition]} />
          <Text style={[styles.doctorname1, styles.available1Typo]}>
            Dr. Ragav
          </Text>
        </View>
      </View>
      <View style={styles.doctorCardShadowBox}>
        <Image
          style={[styles.doctorimageIcon1, styles.doctorimageIconLayout]}
          contentFit="cover"
          source={require("../assets/doctorimage1.png")}
        />
        <View style={styles.doctordetails1}>
          <View style={[styles.spacer3, styles.spacerPosition]} />
          <Text style={[styles.available1, styles.available1Typo]}>
            Available
          </Text>
          <View style={[styles.spacer4, styles.spacerPosition]} />
          <Text style={[styles.specialization1, styles.available1Typo]}>
            Specialization
          </Text>
          <View style={[styles.spacer5, styles.spacerPosition]} />
          <Text style={[styles.doctorname1, styles.available1Typo]}>
            Dr. Ragav
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  doctorimageIconLayout: {
    height: 100,
    borderRadius: Border.br_mini,
  },
  spacerPosition1: {
    height: 1,
    backgroundColor: Color.gainsboro,
    left: "50%",
    marginLeft: -92.75,
    width: 185,
    top: "50%",
    position: "absolute",
  },
  doctornameTypo: {
    fontFamily: FontFamily.latoMedium,
    fontWeight: "500",
    height: 16,
    textAlign: "left",
    color: Color.gray_200,
    fontSize: FontSize.size_sm,
    left: 0,
    width: 185,
    position: "absolute",
  },
  spacerPosition: {
    marginLeft: -92.5,
    height: 1,
    width: 185,
    backgroundColor: Color.gainsboro,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  available1Typo: {
    fontFamily: FontFamily.openSansRegular,
    height: 16,
    textAlign: "left",
    color: Color.gray_200,
    fontSize: FontSize.size_sm,
    left: 0,
    width: 185,
    position: "absolute",
  },
  doctorlist: {
    top: -1,
    left: 28,
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
    width: 23,
    height: 22,
    top: "50%",
    position: "absolute",
  },
  backhome: {
    height: 31,
    flex: 1,
  },
  topbar: {
    borderRadius: Border.br_mid,
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_mid,
    flexDirection: "row",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    alignSelf: "stretch",
    backgroundColor: Color.white,
  },
  doctorimageIcon: {
    maxWidth: "100%",
    overflow: "hidden",
    flex: 1,
  },
  spacer: {
    marginTop: 43,
  },
  available: {
    fontFamily: FontFamily.latoRegular,
    height: 16,
    textAlign: "left",
    color: Color.gray_200,
    fontSize: FontSize.size_sm,
    left: 0,
    top: 71,
    width: 185,
    position: "absolute",
  },
  spacer1: {
    marginTop: 13,
  },
  specialization: {
    top: 41,
  },
  spacer2: {
    marginTop: -15,
  },
  doctorname: {
    top: 14,
  },
  doctordetails: {
    marginLeft: 21,
    height: 98,
    flex: 1,
  },
  doctorCard: {
    display: "none",
    marginTop: 10,
    paddingVertical: Padding.p_7xl,
    paddingHorizontal: Padding.p_3xl,
    borderRadius: Border.br_3xs,
    flexDirection: "row",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    alignSelf: "stretch",
    backgroundColor: Color.white,
  },
  doctorimageIcon1: {
    width: 100,
  },
  spacer3: {
    marginTop: 43,
  },
  available1: {
    top: 71,
    fontFamily: FontFamily.openSansRegular,
  },
  spacer4: {
    marginTop: 13,
  },
  specialization1: {
    top: 41,
  },
  spacer5: {
    marginTop: -15,
  },
  doctorname1: {
    top: 14,
  },
  doctordetails1: {
    width: 185,
    height: 98,
  },
  doctorCardShadowBox: {
    justifyContent: "space-between",
    marginTop: 10,
    paddingVertical: Padding.p_7xl,
    paddingHorizontal: Padding.p_3xl,
    borderRadius: Border.br_3xs,
    flexDirection: "row",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    alignSelf: "stretch",
    backgroundColor: Color.white,
  },
  doctorList: {
    width: "100%",
    flex: 1,
    backgroundColor: Color.white,
  },
});

export default DoctorList;
