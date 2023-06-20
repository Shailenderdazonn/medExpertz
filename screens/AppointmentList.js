import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, Padding, FontFamily, Border } from "../GlobalStyles";

const AppointmentList = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.appointmentlist}>
      <View style={styles.topbar}>
        <Pressable
          style={[styles.userdetails, styles.userdetailsFlexBox]}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            style={styles.logoMedexpertz1Icon}
            contentFit="cover"
            source={require("../assets/logomedexpertz-1.png")}
          />
        </Pressable>
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
      <View style={[styles.appointmentsheading, styles.userdetailsFlexBox]}>
        <Text style={styles.upcomingappointmentsTypo}>
          Upcoming Appointments
        </Text>
      </View>
      <View style={styles.appomintmentcardmainSpaceBlock}>
        <View style={[styles.appomintmentcard, styles.spacerIconFlexBox]}>
          <Image
            style={styles.userimgIcon}
            contentFit="cover"
            source={require("../assets/userimg.png")}
          />
          <Text style={styles.userdetails1}>{`Name

Age

Gender `}</Text>
          <Text
            style={[styles.userdetails2, styles.userdetailsTypo1]}
          >{`Shailender 

24

Male `}</Text>
          <Text style={styles.appointmentdetails}>
            <Text style={styles.appointmentdetailsTxt}>
              <Text style={styles.aug2023}>{`05-Aug
2023

`}</Text>
              <Text style={styles.viewMore}>
                <Text style={styles.viewMore1}>View More</Text>
                <Text style={styles.text}>{` `}</Text>
              </Text>
            </Text>
          </Text>
        </View>
      </View>
      <View style={styles.appomintmentcardmainSpaceBlock}>
        <View style={[styles.appomintmentcard, styles.spacerIconFlexBox]}>
          <Image
            style={styles.userimgIcon}
            contentFit="cover"
            source={require("../assets/userimg.png")}
          />
          <Text style={styles.userdetails1}>{`Name

Age

Gender `}</Text>
          <Text
            style={[styles.userdetails2, styles.userdetailsTypo1]}
          >{`Shailender 

24

Male `}</Text>
          <Text style={styles.appointmentdetails}>
            <Text style={styles.appointmentdetailsTxt}>
              <Text style={styles.aug2023}>{`05-Aug
2023

`}</Text>
              <Text style={styles.viewMore}>
                <Text style={styles.viewMore1}>View More</Text>
                <Text style={styles.text}>{` `}</Text>
              </Text>
            </Text>
          </Text>
        </View>
      </View>
      <View
        style={[
          styles.appomintmentcardmain2,
          styles.appomintmentcardmainSpaceBlock,
        ]}
      >
        <View style={[styles.appomintmentcard2, styles.appomintmentcardBorder]}>
          <Image
            style={styles.userimgIcon2}
            contentFit="cover"
            source={require("../assets/userimg.png")}
          />
          <Text style={[styles.userdetails4, styles.userdetailsTypo]}>{`Name

Age

Gender `}</Text>
          <Text
            style={[styles.userdetails2, styles.userdetailsTypo1]}
          >{`Shailender 

24

Male `}</Text>
          <Text
            style={[
              styles.appointmentdetails2,
              styles.appointmentdetailsLayout,
            ]}
          >
            <Text style={styles.appointmentdetailsTxt}>
              <Text style={styles.aug2023}>{`05-Aug
2023

`}</Text>
              <Text style={styles.viewMore}>
                <Text style={styles.viewMore1}>View More</Text>
                <Text style={styles.text}>{` `}</Text>
              </Text>
            </Text>
          </Text>
        </View>
      </View>
      <Image
        style={[styles.spacerIcon, styles.spacerIconFlexBox]}
        contentFit="cover"
        source={require("../assets/spacer.png")}
      />
      <Text
        style={[styles.previousAppointments, styles.upcomingappointmentsTypo]}
      >
        Previous Appointments
      </Text>
      <View style={styles.appomintmentcardmainSpaceBlock}>
        <View style={[styles.appomintmentcard, styles.spacerIconFlexBox]}>
          <Image
            style={styles.userimgIcon}
            contentFit="cover"
            source={require("../assets/userimg.png")}
          />
          <Text style={styles.userdetails1}>{`Name

Age

Gender `}</Text>
          <Text
            style={[styles.userdetails2, styles.userdetailsTypo1]}
          >{`Shailender 

24

Male `}</Text>
          <Text style={styles.appointmentdetails}>
            <Text style={styles.appointmentdetailsTxt}>
              <Text style={styles.aug2023}>{`05-Aug
2023

`}</Text>
              <Text style={styles.viewMore}>
                <Text style={styles.viewMore1}>View More</Text>
                <Text style={styles.text}>{` `}</Text>
              </Text>
            </Text>
          </Text>
        </View>
      </View>
      <View style={styles.appomintmentcardmainSpaceBlock}>
        <View style={[styles.appomintmentcard, styles.spacerIconFlexBox]}>
          <Image
            style={styles.userimgIcon}
            contentFit="cover"
            source={require("../assets/userimg.png")}
          />
          <Text style={styles.userdetails1}>{`Name

Age

Gender `}</Text>
          <Text
            style={[styles.userdetails2, styles.userdetailsTypo1]}
          >{`Shailender 

24

Male `}</Text>
          <Text style={styles.appointmentdetails}>
            <Text style={styles.appointmentdetailsTxt}>
              <Text style={styles.aug2023}>{`05-Aug
2023

`}</Text>
              <Text style={styles.viewMore}>
                <Text style={styles.viewMore1}>View More</Text>
                <Text style={styles.text}>{` `}</Text>
              </Text>
            </Text>
          </Text>
        </View>
      </View>
      <View
        style={[
          styles.appomintmentcardmain2,
          styles.appomintmentcardmainSpaceBlock,
        ]}
      >
        <View style={styles.appomintmentcardBorder}>
          <Image
            style={styles.userimgIcon2}
            contentFit="cover"
            source={require("../assets/userimg.png")}
          />
          <Text style={[styles.userdetails7, styles.userdetailsTypo]}>{`Name

Age

Gender `}</Text>
          <Text
            style={[styles.userdetails25, styles.userdetailsTypo1]}
          >{`Shailender 

24

Male `}</Text>
          <Text
            style={[
              styles.appointmentdetails5,
              styles.appointmentdetailsLayout,
            ]}
          >
            <Text style={styles.appointmentdetailsTxt}>
              <Text style={styles.aug2023}>{`05-Aug
2023

`}</Text>
              <Text style={styles.viewMore}>
                <Text style={styles.viewMore1}>View More</Text>
                <Text style={styles.text}>{` `}</Text>
              </Text>
            </Text>
          </Text>
        </View>
      </View>
      <Image
        style={[styles.spacerIcon, styles.spacerIconFlexBox]}
        contentFit="cover"
        source={require("../assets/spacer.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  userdetailsFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  spacerIconFlexBox: {
    overflow: "hidden",
    alignSelf: "stretch",
  },
  userdetailsTypo1: {
    width: 80,
    textAlign: "left",
    color: Color.black,
    fontSize: FontSize.size_xs,
  },
  appomintmentcardmainSpaceBlock: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_xl,
    marginTop: 16,
    alignSelf: "stretch",
  },
  appomintmentcardBorder: {
    paddingVertical: Padding.p_3xs,
    overflow: "hidden",
    height: 94,
    borderWidth: 2,
    borderColor: "#0f6d65",
    borderStyle: "solid",
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
    paddingHorizontal: 0,
    backgroundColor: Color.white,
  },
  userdetailsTypo: {
    width: 40,
    textAlign: "left",
    color: Color.black,
    fontSize: FontSize.size_xs,
  },
  appointmentdetailsLayout: {
    width: 46,
    display: "flex",
    height: 70,
    textAlign: "center",
    alignItems: "center",
  },
  upcomingappointmentsTypo: {
    textAlign: "center",
    color: Color.teal_100,
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
  },
  logoMedexpertz1Icon: {
    width: 95,
    height: 46,
  },
  userdetails: {
    width: 132,
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
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_mid,
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
    backgroundColor: Color.white,
  },
  appointmentsheading: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
  userimgIcon: {
    width: 61,
    height: 70,
    borderRadius: Border.br_xs,
  },
  userdetails1: {
    width: 42,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.openSansRegular,
    fontSize: FontSize.size_xs,
  },
  userdetails2: {
    fontFamily: FontFamily.openSansRegular,
  },
  aug2023: {
    fontSize: FontSize.size_3xs,
    color: Color.black,
  },
  viewMore1: {
    fontSize: FontSize.size_sm,
  },
  text: {
    fontSize: FontSize.size_xs,
  },
  viewMore: {
    color: Color.tomato,
  },
  appointmentdetailsTxt: {
    lineBreak: "anywhere",
    width: "100%",
  },
  appointmentdetails: {
    width: 38,
    display: "flex",
    fontFamily: FontFamily.openSansRegular,
    height: 70,
    textAlign: "center",
    alignItems: "center",
  },
  appomintmentcard: {
    paddingTop: Padding.p_9xs,
    paddingBottom: Padding.p_3xs,
    height: 94,
    borderWidth: 2,
    borderColor: "#0f6d65",
    borderStyle: "solid",
    overflow: "hidden",
    borderRadius: Border.br_mini,
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: Color.white,
  },
  userimgIcon2: {
    width: 55,
    height: 62,
    borderRadius: Border.br_xs,
  },
  userdetails4: {
    fontFamily: FontFamily.openSansRegular,
  },
  appointmentdetails2: {
    fontFamily: FontFamily.openSansRegular,
  },
  appomintmentcard2: {
    borderRadius: Border.br_mini,
    paddingVertical: Padding.p_3xs,
  },
  appomintmentcardmain2: {
    display: "none",
  },
  spacerIcon: {
    maxWidth: "100%",
    height: 15,
    marginTop: 16,
    width: "100%",
  },
  previousAppointments: {
    marginTop: 16,
    alignSelf: "stretch",
    textAlign: "center",
    color: Color.teal_100,
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
  },
  userdetails7: {
    fontFamily: FontFamily.latoRegular,
  },
  userdetails25: {
    fontFamily: FontFamily.latoRegular,
  },
  appointmentdetails5: {
    fontFamily: FontFamily.latoRegular,
  },
  appointmentlist: {
    flex: 1,
    paddingVertical: Padding.p_smi,
    paddingHorizontal: 0,
    backgroundColor: Color.white,
    width: "100%",
  },
});

export default AppointmentList;
