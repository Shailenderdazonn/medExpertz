import React, { useState } from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { Input as RNKTextInput, Icon as RNKIcon } from "@ui-kitten/components";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

const Home = () => {
  const [searchBarTextInput, setSearchBarTextInput] = useState();
  const navigation = useNavigation();

  return (
    <View style={styles.home}>
      <View style={styles.topbar}>
        <View style={styles.userdetails}>
          <Text style={[styles.welcome, styles.welcomeTypo]}>Welcome</Text>
          <Text style={[styles.username, styles.welcomeTypo]}>User Name</Text>
        </View>
        <Pressable
          style={styles.userimage}
          onPress={() => navigation.navigate("ProfileSetting")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/userimage.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.searchbarmain, styles.categorycol1FlexBox]}>
        <RNKTextInput
          style={styles.searchbar}
          placeholder="Search Medical"
          value={searchBarTextInput}
          onChangeText={setSearchBarTextInput}
          accessoryLeft={<RNKIcon name="magnify" pack="material" />}
        />
      </View>
      <View style={styles.categoriesheading}>
        <Text style={[styles.categories, styles.categoriesTypo]}>
          Categories
        </Text>
      </View>
      <View style={[styles.categorycol1, styles.categorycol1FlexBox]}>
        <Pressable
          style={[styles.doctor, styles.nurseBg]}
          onPress={() => navigation.navigate("Doctor")}
        >
          <Image
            style={[styles.doctorimgIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/doctorimg.png")}
          />
          <Text style={[styles.doctor1, styles.nurseFlexBox]}>Doctor</Text>
        </Pressable>
        <Pressable
          style={[styles.nurse, styles.nurseFlexBox]}
          onPress={() => navigation.navigate("Nurses")}
        >
          <Image
            style={[styles.doctorimgIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/nurseimg.png")}
          />
          <Text style={[styles.doctor1, styles.nurseFlexBox]}>Nurse</Text>
        </Pressable>
      </View>
      <View style={[styles.categorycol1, styles.categorycol1FlexBox]}>
        <Pressable
          style={[styles.doctor, styles.nurseBg]}
          onPress={() => navigation.navigate("Chemist")}
        >
          <Image
            style={[styles.chemistryimgIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/chemistryimg.png")}
          />
          <Text style={[styles.chemist1, styles.nurseFlexBox]}>Chemist</Text>
        </Pressable>
        <Pressable
          style={[styles.nurse, styles.nurseFlexBox]}
          onPress={() => navigation.navigate("Creches")}
        >
          <Image
            style={[styles.chemistryimgIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/crechimg.png")}
          />
          <Text style={[styles.doctor1, styles.nurseFlexBox]}>Crech</Text>
        </Pressable>
      </View>
      <LinearGradient
        style={styles.bookappointment}
        locations={[0, 1]}
        colors={["#48afc6", "rgba(217, 217, 217, 0)"]}
      >
        <Image
          style={styles.bookappointmentimgIcon}
          contentFit="cover"
          source={require("../assets/bookappointmentimg.png")}
        />
        <Text
          style={[styles.bookappointmenttext, styles.appointmenttext2Position]}
        >
          Book Appointment
        </Text>
        <Text
          style={[styles.appointmenttext2, styles.appointmenttext2Position]}
        >
          Quickly Create Files
        </Text>
        <Pressable
          style={[
            styles.bookappointmentbutton,
            styles.appointmenttext2Position,
          ]}
          onPress={() => navigation.navigate("BookAppointment")}
        >
          <Text style={styles.bookappointment1}>Book Appointment</Text>
        </Pressable>
      </LinearGradient>
      <View style={styles.appointmentsheading}>
        <Text style={[styles.categories, styles.categoriesTypo]}>
          Upcoming Appointments
        </Text>
      </View>
      <View
        style={[
          styles.upcomingappointmentscontainerWrapper,
          styles.upcomingappointmentscontainerSpaceBlock,
        ]}
      >
        <Pressable
          style={[styles.upcomingappointmentscontainer, styles.timeLayout]}
          onPress={() => navigation.navigate("AppointmentList")}
        >
          <View style={styles.date}>
            <Text style={[styles.tue, styles.tueFlexBox]}>{`12
Tue`}</Text>
          </View>
          <Text
            style={[styles.time, styles.timeLayout]}
            selectionColor="#ffffff"
          >
            <Text style={styles.timeTxt}>
              <Text style={styles.text}>1</Text>
              <Text style={styles.amDrSkSharmaDepression}>
                <Text style={styles.text}>{`1:15 Am
`}</Text>
                <Text style={styles.drSkSharmaDepression}>{`Dr. S.K Sharma
Depression`}</Text>
              </Text>
            </Text>
          </Text>
        </Pressable>
      </View>
      <View style={styles.spacer} />
    </View>
  );
};

const styles = StyleSheet.create({
  welcomeTypo: {
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    textAlign: "center",
    color: Color.black,
    position: "absolute",
  },
  categorycol1FlexBox: {
    overflow: "hidden",
    marginTop: 16,
    flexDirection: "row",
    alignSelf: "stretch",
    backgroundColor: Color.white,
  },
  categoriesTypo: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
  },
  nurseBg: {
    backgroundColor: Color.darkslateblue_100,
    borderRadius: Border.br_base,
    paddingVertical: Padding.p_mid,
    flexDirection: "row",
  },
  iconLayout: {
    maxWidth: "100%",
    overflow: "hidden",
    flex: 1,
  },
  nurseFlexBox: {
    marginLeft: 10,
    alignItems: "center",
    flex: 1,
  },
  appointmenttext2Position: {
    left: 9,
    position: "absolute",
  },
  upcomingappointmentscontainerSpaceBlock: {
    paddingVertical: 0,
    alignSelf: "stretch",
  },
  timeLayout: {
    height: 102,
    alignItems: "center",
  },
  tueFlexBox: {
    display: "flex",
    textAlign: "center",
  },
  welcome: {
    top: 0,
    left: -2,
    fontSize: 11,
    textAlign: "center",
    color: Color.black,
  },
  username: {
    top: 13,
    left: -5,
    fontSize: FontSize.size_mini,
    textAlign: "center",
    color: Color.black,
  },
  userdetails: {
    width: 132,
    height: 31,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  userimage: {
    width: 35,
    height: 35,
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
    justifyContent: "space-between",
    paddingVertical: Padding.p_mid,
    paddingHorizontal: Padding.p_mini,
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
    padding: Padding.p_mini,
    marginTop: 16,
  },
  categories: {
    color: Color.teal_100,
    textAlign: "center",
  },
  categoriesheading: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  doctorimgIcon: {
    maxHeight: "100%",
    alignSelf: "stretch",
    width: "100%",
  },
  doctor1: {
    height: 33,
    fontSize: FontSize.size_base,
    marginLeft: 10,
    display: "flex",
    color: Color.white,
    fontFamily: FontFamily.openSansRegular,
    justifyContent: "center",
    textAlign: "center",
  },
  doctor: {
    paddingHorizontal: Padding.p_xs,
    alignItems: "center",
    flex: 1,
  },
  nurse: {
    paddingHorizontal: Padding.p_2xs,
    backgroundColor: Color.darkslateblue_100,
    borderRadius: Border.br_base,
    paddingVertical: Padding.p_mid,
    flexDirection: "row",
  },
  categorycol1: {
    height: 100,
    padding: Padding.p_3xs,
    marginTop: 16,
  },
  chemistryimgIcon: {
    height: 38,
  },
  chemist1: {
    textAlign: "left",
    height: 33,
    fontSize: FontSize.size_base,
    marginLeft: 10,
    display: "flex",
    color: Color.white,
    fontFamily: FontFamily.openSansRegular,
  },
  bookappointmentimgIcon: {
    right: 1,
    width: 168,
    height: 135,
    top: 14,
    position: "absolute",
  },
  bookappointmenttext: {
    color: "#1c9679",
    width: 138,
    height: 40,
    top: 14,
    textAlign: "left",
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
  },
  appointmenttext2: {
    top: 75,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
    color: Color.black,
  },
  bookappointment1: {
    fontSize: 8,
    height: 11,
    color: Color.white,
    textAlign: "center",
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    flex: 1,
  },
  bookappointmentbutton: {
    top: 96,
    borderRadius: Border.br_8xs,
    width: 88,
    paddingVertical: 3,
    height: 15,
    backgroundColor: Color.tomato,
    flexDirection: "row",
    paddingHorizontal: 0,
  },
  bookappointment: {
    height: 156,
    backgroundColor: "transparent",
    marginTop: 16,
    alignSelf: "stretch",
  },
  appointmentsheading: {
    paddingVertical: 14,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
    flexDirection: "row",
    alignSelf: "stretch",
    paddingHorizontal: 0,
  },
  tue: {
    marginLeft: -30.25,
    top: 8,
    left: "50%",
    fontSize: FontSize.size_lg,
    fontWeight: "800",
    fontFamily: FontFamily.openSansExtrabold,
    color: "#f6f6f6",
    width: 59,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  date: {
    borderRadius: Border.br_3xs,
    height: 74,
    backgroundColor: Color.tomato,
    flex: 1,
  },
  text: {
    fontSize: FontSize.size_3xs,
  },
  drSkSharmaDepression: {
    fontSize: FontSize.size_mini,
  },
  amDrSkSharmaDepression: {
    letterSpacing: "-7.5%",
  },
  timeTxt: {
    lineBreak: "anywhere",
  },
  time: {
    color: Color.gainsboro,
    marginLeft: 43,
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.openSansRegular,
    flex: 1,
  },
  upcomingappointmentscontainer: {
    borderRadius: 11,
    backgroundColor: "#1e6b7b",
    paddingHorizontal: 21,
    paddingVertical: 0,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  upcomingappointmentscontainerWrapper: {
    marginTop: 16,
    paddingHorizontal: Padding.p_mini,
    paddingVertical: 0,
  },
  spacer: {
    height: 15,
    marginTop: 16,
    alignSelf: "stretch",
    backgroundColor: Color.white,
  },
  home: {
    paddingVertical: Padding.p_smi,
    paddingHorizontal: 0,
    width: "100%",
    flex: 1,
    backgroundColor: Color.white,
  },
});

export default Home;
