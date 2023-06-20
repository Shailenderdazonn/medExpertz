import React, { useState } from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { Input as RNKTextInput, Icon as RNKIcon } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Color, Padding } from "../GlobalStyles";

const Creches = () => {
  const [searchBarTextInput, setSearchBarTextInput] = useState();
  const navigation = useNavigation();

  return (
    <View style={styles.creches}>
      <View style={styles.topbar}>
        <View style={styles.backhome}>
          <Text style={styles.creches1}>Creches</Text>
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
      <View style={[styles.crechescategorygroup, styles.searchbarmainFlexBox]}>
        <View style={styles.crechescategorygroupInner}>
          <View style={styles.groupParent}>
            <View
              style={[styles.rectangleParent, styles.rectangleParentLayout]}
            >
              <View style={[styles.groupChild, styles.groupLayout]} />
              <Text
                style={[styles.privateOrStand, styles.homeTypo]}
              >{`Private or Stand-
Alone Nurseries.`}</Text>
              <Image
                style={styles.sd1Icon}
                contentFit="cover"
                source={require("../assets/sd-1.png")}
              />
            </View>
            <Pressable
              style={[styles.rectangleGroup, styles.rectangleParentLayout]}
              onPress={() => navigation.navigate("DoctorList")}
            >
              <View style={[styles.groupItem, styles.groupLayout]} />
              <Text
                style={[styles.privateDaycareChains, styles.homeTypo]}
              >{`Private Daycare 
Chains`}</Text>
              <Image
                style={styles.daycare11Icon}
                contentFit="cover"
                source={require("../assets/daycare-1-1.png")}
              />
            </Pressable>
            <View style={[styles.rectangleContainer, styles.groupViewPosition]}>
              <View style={[styles.groupInner, styles.groupLayout]} />
              <Text style={[styles.inHomeDaycare, styles.homeTypo]}>
                In Home Daycare
              </Text>
              <Image
                style={styles.inHomeDaycare1Icon}
                contentFit="cover"
                source={require("../assets/inhomedaycare-1.png")}
              />
            </View>
            <View style={[styles.groupView, styles.groupViewPosition]}>
              <View style={[styles.rectangleView, styles.groupLayout]} />
              <Text
                style={[styles.homeBasedCreches, styles.homeTypo]}
              >{`Home Based
Creches`}</Text>
              <Image
                style={styles.teacherhome010111Icon}
                contentFit="cover"
                source={require("../assets/teacherhome01011-1.png")}
              />
            </View>
            <View
              style={[styles.rectangleParent1, styles.rectangleParentPosition3]}
            >
              <View style={[styles.groupChild, styles.groupLayout]} />
              <Text style={[styles.sharedNanny, styles.nannyTypo]}>
                Shared Nanny
              </Text>
              <Image
                style={[styles.sharedNanny1Icon, styles.iconPosition1]}
                contentFit="cover"
                source={require("../assets/sharednanny-1.png")}
              />
            </View>
            <View
              style={[styles.rectangleParent2, styles.rectangleParentPosition3]}
            >
              <View style={[styles.groupItem, styles.groupLayout]} />
              <Text style={[styles.nanny, styles.nannyTypo]}>Nanny</Text>
              <Image
                style={[styles.nanny1Icon, styles.preschoolPosition]}
                contentFit="cover"
                source={require("../assets/nanny-1.png")}
              />
            </View>
            <View
              style={[styles.rectangleParent3, styles.rectangleParentPosition2]}
            >
              <View style={[styles.groupInner, styles.groupLayout]} />
              <Text style={[styles.babysitter, styles.babysitterPosition]}>
                Babysitter
              </Text>
              <Image
                style={styles.babysitter1Icon}
                contentFit="cover"
                source={require("../assets/babysitter-1.png")}
              />
            </View>
            <View
              style={[styles.rectangleParent4, styles.rectangleParentPosition2]}
            >
              <View style={[styles.rectangleView, styles.groupLayout]} />
              <Text style={[styles.auPair, styles.nannyTypo]}>Au Pair</Text>
              <Image
                style={[styles.auPair1Icon, styles.iconPosition]}
                contentFit="cover"
                source={require("../assets/aupair-1.png")}
              />
            </View>
            <View
              style={[styles.rectangleParent5, styles.rectangleParentPosition1]}
            >
              <View style={[styles.groupChild, styles.groupLayout]} />
              <Text style={[styles.relativeCare, styles.nannyTypo]}>
                Relative Care
              </Text>
              <Image
                style={styles.icon1}
                contentFit="cover"
                source={require("../assets/4024804-1.png")}
              />
            </View>
            <View
              style={[styles.rectangleParent6, styles.rectangleParentPosition1]}
            >
              <View style={[styles.groupItem, styles.groupLayout]} />
              <Text
                style={[styles.traditionalDaycareCenter, styles.homeTypo]}
              >{`Traditional Daycare
Center`}</Text>
              <Image
                style={[
                  styles.baby526658644038601Icon,
                  styles.babysitterPosition,
                ]}
                contentFit="cover"
                source={require("../assets/baby52665864403860-1.png")}
              />
            </View>
            <View
              style={[styles.rectangleParent7, styles.rectangleParentPosition]}
            >
              <View style={[styles.groupInner, styles.groupLayout]} />
              <Text style={[styles.workplaceCreches, styles.nannyTypo]}>
                Workplace Creches
              </Text>
              <Image
                style={[styles.workplaceCreches1Icon, styles.iconPosition]}
                contentFit="cover"
                source={require("../assets/workplacecreches-1.png")}
              />
            </View>
            <View
              style={[styles.rectangleParent8, styles.rectangleParentPosition]}
            >
              <View style={[styles.rectangleView, styles.groupLayout]} />
              <Text style={[styles.preschool, styles.preschoolPosition]}>
                Preschool
              </Text>
              <Image
                style={styles.zeroNumber486364540562911Icon}
                contentFit="cover"
                source={require("../assets/zeronumber48636454056291-1.png")}
              />
            </View>
            <View
              style={[styles.rectangleParent9, styles.rectangleParentLayout]}
            >
              <View style={[styles.groupItem, styles.groupLayout]} />
              <Text
                style={[styles.daycareCentresAttached, styles.homeTypo]}
              >{`Daycare Centres
Attached To 
Independent Schools`}</Text>
              <Image
                style={[
                  styles.daycareCentresAttachedToInIcon,
                  styles.iconPosition1,
                ]}
                contentFit="cover"
                source={require("../assets/daycarecentresattachedtoindependentchools-1.png")}
              />
            </View>
          </View>
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
  rectangleParentLayout: {
    height: 120,
    width: 144,
    position: "absolute",
  },
  groupLayout: {
    borderRadius: Border.br_mini,
    height: 120,
    width: 144,
    top: 0,
    left: 0,
    position: "absolute",
  },
  homeTypo: {
    fontFamily: FontFamily.openSansRegular,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    color: Color.black,
    position: "absolute",
  },
  groupViewPosition: {
    top: 130,
    height: 120,
    width: 144,
    position: "absolute",
  },
  rectangleParentPosition3: {
    top: 260,
    height: 120,
    width: 144,
    position: "absolute",
  },
  nannyTypo: {
    top: 96,
    fontFamily: FontFamily.openSansRegular,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    color: Color.black,
  },
  iconPosition1: {
    left: 48,
    position: "absolute",
  },
  preschoolPosition: {
    left: 40,
    position: "absolute",
  },
  rectangleParentPosition2: {
    top: 390,
    height: 120,
    width: 144,
    position: "absolute",
  },
  babysitterPosition: {
    left: 39,
    position: "absolute",
  },
  iconPosition: {
    width: 87,
    left: 29,
    position: "absolute",
  },
  rectangleParentPosition1: {
    top: 520,
    height: 120,
    width: 144,
    position: "absolute",
  },
  rectangleParentPosition: {
    top: 650,
    height: 120,
    width: 144,
    position: "absolute",
  },
  creches1: {
    top: -1,
    fontSize: FontSize.size_lg,
    fontWeight: "700",
    fontFamily: FontFamily.openSansBold,
    textAlign: "center",
    color: Color.black,
    left: 29,
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
  groupChild: {
    backgroundColor: Color.forestgreen,
  },
  privateOrStand: {
    left: 18,
    top: 79,
    fontSize: FontSize.size_sm,
  },
  sd1Icon: {
    left: 50,
    width: 41,
    height: 48,
    top: 22,
    position: "absolute",
  },
  rectangleParent: {
    left: 154,
    top: 0,
    width: 144,
  },
  groupItem: {
    backgroundColor: Color.darksalmon,
  },
  privateDaycareChains: {
    left: 19,
    top: 79,
    fontSize: FontSize.size_sm,
  },
  daycare11Icon: {
    left: 44,
    width: 57,
    height: 57,
    top: 22,
    position: "absolute",
  },
  rectangleGroup: {
    top: 0,
    width: 144,
    left: 0,
  },
  groupInner: {
    backgroundColor: Color.mistyrose_100,
  },
  inHomeDaycare: {
    top: 94,
    left: 16,
  },
  inHomeDaycare1Icon: {
    left: 37,
    width: 70,
    height: 59,
    top: 22,
    position: "absolute",
  },
  rectangleContainer: {
    left: 154,
  },
  rectangleView: {
    backgroundColor: Color.darkseagreen_100,
  },
  homeBasedCreches: {
    left: 30,
    top: 79,
    fontSize: FontSize.size_sm,
  },
  teacherhome010111Icon: {
    top: 19,
    left: 43,
    width: 59,
    height: 63,
    position: "absolute",
  },
  groupView: {
    left: 0,
  },
  sharedNanny: {
    left: 26,
    position: "absolute",
  },
  sharedNanny1Icon: {
    width: 47,
    height: 59,
    top: 22,
  },
  rectangleParent1: {
    left: 154,
  },
  nanny: {
    left: 51,
    position: "absolute",
  },
  nanny1Icon: {
    top: 20,
    width: 64,
    height: 59,
  },
  rectangleParent2: {
    left: 0,
  },
  babysitter: {
    top: 96,
    fontFamily: FontFamily.openSansRegular,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    color: Color.black,
  },
  babysitter1Icon: {
    left: 57,
    width: 31,
    height: 59,
    top: 22,
    position: "absolute",
  },
  rectangleParent3: {
    left: 154,
  },
  auPair: {
    left: 49,
    position: "absolute",
  },
  auPair1Icon: {
    height: 59,
    top: 22,
  },
  rectangleParent4: {
    left: 0,
  },
  relativeCare: {
    left: 29,
    top: 96,
    position: "absolute",
  },
  icon1: {
    top: 10,
    left: 8,
    width: 129,
    height: 86,
    position: "absolute",
  },
  rectangleParent5: {
    left: 154,
  },
  traditionalDaycareCenter: {
    left: 9,
    top: 79,
    fontSize: FontSize.size_sm,
  },
  baby526658644038601Icon: {
    top: 14,
    width: 67,
    height: 67,
  },
  rectangleParent6: {
    left: 0,
  },
  workplaceCreches: {
    left: 10,
    position: "absolute",
  },
  workplaceCreches1Icon: {
    top: 23,
    height: 56,
  },
  rectangleParent7: {
    left: 154,
  },
  preschool: {
    top: 96,
    fontFamily: FontFamily.openSansRegular,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    color: Color.black,
  },
  zeroNumber486364540562911Icon: {
    top: 17,
    left: 38,
    width: 68,
    height: 68,
    position: "absolute",
  },
  rectangleParent8: {
    left: 0,
  },
  daycareCentresAttached: {
    top: 62,
    left: 5,
  },
  daycareCentresAttachedToInIcon: {
    top: 11,
    width: 48,
    height: 49,
  },
  rectangleParent9: {
    top: 780,
    left: 0,
  },
  groupParent: {
    top: 2,
    height: 900,
    left: 0,
    width: 298,
    position: "absolute",
  },
  crechescategorygroupInner: {
    height: 510,
    width: 298,
  },
  crechescategorygroup: {
    paddingHorizontal: Padding.p_11xl,
    paddingVertical: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  creches: {
    paddingBottom: Padding.p_smi,
    alignItems: "center",
    width: "100%",
    flex: 1,
    backgroundColor: Color.white,
  },
});

export default Creches;
