import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const ProfileSetting = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.profileSetting}>
      <View style={[styles.topbar, styles.topbarFlexBox]}>
        <View style={styles.backhome}>
          <Text style={styles.setting}>Setting</Text>
          <Pressable
            style={styles.backarrow}
            onPress={() => navigation.navigate("Home")}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/backarrow.png")}
            />
          </Pressable>
        </View>
      </View>
      <View
        style={[styles.userdetails, styles.mysubscriptionscontainerSpaceBlock]}
      >
        <View style={[styles.userdetailscard, styles.topbarFlexBox]}>
          <View style={styles.userinfo}>
            <Image
              style={[styles.useringIcon, styles.useringIconPosition]}
              contentFit="cover"
              source={require("../assets/usering.png")}
            />
            <View style={styles.signin}>
              <Text style={styles.signin1}>Sign In</Text>
              <Text style={styles.profile}>Profile</Text>
            </View>
          </View>
          <Pressable
            style={styles.editbtn}
            onPress={() => navigation.navigate("ProfileEdit")}
          >
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../assets/editbtn1.png")}
            />
          </Pressable>
        </View>
      </View>
      <View
        style={[
          styles.mysubscriptionscontainer,
          styles.mysubscriptionscontainerSpaceBlock,
        ]}
      >
        <Text style={[styles.subscriptions, styles.subscriptionsTypo]}>
          My Subscriptions
        </Text>
        <View style={styles.horizontalline} />
      </View>
      <View
        style={[
          styles.mysubscriptionscontainer2,
          styles.mysubscriptionscontainerSpaceBlock,
        ]}
      >
        <Image
          style={styles.icon2}
          contentFit="cover"
          source={require("../assets/icon.png")}
        />
        <Text style={[styles.mysubscriptions, styles.subscriptionsTypo]}>
          My Subscriptions
        </Text>
      </View>
      <View
        style={[
          styles.mysubscriptionscontainer2,
          styles.mysubscriptionscontainerSpaceBlock,
        ]}
      >
        <Image
          style={styles.icon2}
          contentFit="cover"
          source={require("../assets/icon.png")}
        />
        <Text style={[styles.mysubscriptions, styles.subscriptionsTypo]}>
          My Appointments
        </Text>
      </View>
      <View
        style={[
          styles.mysubscriptionscontainer2,
          styles.mysubscriptionscontainerSpaceBlock,
        ]}
      >
        <Image
          style={styles.icon2}
          contentFit="cover"
          source={require("../assets/icon.png")}
        />
        <Text style={[styles.mysubscriptions, styles.subscriptionsTypo]}>
          Subscription Plans
        </Text>
      </View>
      <View
        style={[
          styles.mysubscriptionscontainer,
          styles.mysubscriptionscontainerSpaceBlock,
        ]}
      >
        <Text style={[styles.subscriptions, styles.subscriptionsTypo]}>
          More
        </Text>
        <View style={styles.horizontalline} />
      </View>
      <View
        style={[
          styles.mysubscriptionscontainer2,
          styles.mysubscriptionscontainerSpaceBlock,
        ]}
      >
        <Image
          style={styles.icon2}
          contentFit="cover"
          source={require("../assets/icon.png")}
        />
        <Text style={[styles.mysubscriptions, styles.subscriptionsTypo]}>
          Departments
        </Text>
      </View>
      <View
        style={[
          styles.mysubscriptionscontainer2,
          styles.mysubscriptionscontainerSpaceBlock,
        ]}
      >
        <Image
          style={styles.icon2}
          contentFit="cover"
          source={require("../assets/icon.png")}
        />
        <Text style={[styles.mysubscriptions, styles.subscriptionsTypo]}>
          Facilities
        </Text>
      </View>
      <View
        style={[
          styles.mysubscriptionscontainer2,
          styles.mysubscriptionscontainerSpaceBlock,
        ]}
      >
        <Image
          style={styles.icon2}
          contentFit="cover"
          source={require("../assets/icon.png")}
        />
        <Text style={[styles.mysubscriptions, styles.subscriptionsTypo]}>
          Gallery
        </Text>
      </View>
      <View
        style={[
          styles.mysubscriptionscontainer,
          styles.mysubscriptionscontainerSpaceBlock,
        ]}
      >
        <Text style={[styles.subscriptions, styles.subscriptionsTypo]}>
          Contact Detail
        </Text>
        <View style={styles.horizontalline} />
      </View>
      <View
        style={[
          styles.mysubscriptionscontainer2,
          styles.mysubscriptionscontainerSpaceBlock,
        ]}
      >
        <Image
          style={styles.icon2}
          contentFit="cover"
          source={require("../assets/icon.png")}
        />
        <Text
          style={[styles.mysubscriptions, styles.subscriptionsTypo]}
        >{`Term & Condition`}</Text>
      </View>
      <View
        style={[
          styles.mysubscriptionscontainer2,
          styles.mysubscriptionscontainerSpaceBlock,
        ]}
      >
        <Image
          style={styles.icon2}
          contentFit="cover"
          source={require("../assets/icon.png")}
        />
        <Text style={[styles.mysubscriptions, styles.subscriptionsTypo]}>
          About Us
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topbarFlexBox: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  mysubscriptionscontainerSpaceBlock: {
    marginTop: 5,
    alignSelf: "stretch",
  },
  useringIconPosition: {
    top: 0,
    position: "absolute",
  },
  subscriptionsTypo: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
  },
  setting: {
    top: -1,
    left: 29,
    fontSize: FontSize.size_lg,
    color: Color.black,
    textAlign: "center",
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  icon: {
    marginTop: -15.5,
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
    paddingVertical: Padding.p_mid,
    paddingHorizontal: Padding.p_mini,
    backgroundColor: Color.white,
    flexDirection: "row",
  },
  useringIcon: {
    left: -4,
    width: 89,
    height: 89,
  },
  signin1: {
    fontSize: FontSize.size_sm,
    color: "#003769",
    fontFamily: FontFamily.openSansRegular,
    left: 0,
    width: 45,
    top: 0,
    textAlign: "center",
    position: "absolute",
  },
  profile: {
    top: 19,
    fontSize: FontSize.size_3xs,
    color: "#817b7b",
    width: 33,
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
    left: 0,
    position: "absolute",
  },
  signin: {
    top: 25,
    left: 99,
    height: 33,
    width: 45,
    position: "absolute",
  },
  userinfo: {
    width: 144,
    height: 81,
  },
  editbtn: {
    width: 25,
    height: 25,
  },
  userdetailscard: {
    justifyContent: "space-between",
  },
  userdetails: {
    paddingHorizontal: 23,
    paddingVertical: 24,
  },
  subscriptions: {
    color: Color.gray_100,
  },
  horizontalline: {
    backgroundColor: Color.gainsboro,
    height: 2,
    marginTop: 10,
    alignSelf: "stretch",
  },
  mysubscriptionscontainer: {
    height: 61,
    paddingVertical: 0,
    justifyContent: "center",
    paddingHorizontal: Padding.p_mini,
  },
  icon2: {
    top: 7,
    right: 26,
    width: 8,
    height: 12,
    position: "absolute",
  },
  mysubscriptions: {
    left: 15,
    color: Color.darkgray,
    width: 140,
    top: 0,
    position: "absolute",
  },
  mysubscriptionscontainer2: {
    height: 33,
  },
  profileSetting: {
    paddingBottom: Padding.p_11xl,
    width: "100%",
    flex: 1,
    backgroundColor: Color.white,
  },
});

export default ProfileSetting;
