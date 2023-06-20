import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { TextInput as RNPTextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const ProfileEdit = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.profileEdit}>
      <View style={[styles.topbar, styles.nameFlexBox]}>
        <View style={styles.backhome}>
          <Text style={[styles.profileedit, styles.updateTypo]}>
            Profile Update
          </Text>
          <Pressable
            style={styles.backarrow}
            onPress={() => navigation.navigate("ProfileSetting")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/backarrow.png")}
            />
          </Pressable>
        </View>
      </View>
      <View style={[styles.userimg, styles.nameSpaceBlock]}>
        <View style={[styles.profileimg, styles.updatebtnFlexBox]}>
          <Image
            style={styles.userimgIcon}
            contentFit="cover"
            source={require("../assets/userimg1.png")}
          />
          <Image
            style={styles.editbtnIcon}
            contentFit="cover"
            source={require("../assets/editbtn.png")}
          />
        </View>
      </View>
      <View style={[styles.name, styles.nameSpaceBlock]}>
        <RNPTextInput
          style={styles.name1}
          placeholder="Edit Name"
          mode="flat"
          underlineColor="#f15943"
          activeUnderlineColor="#0f6d65"
          theme={{ colors: { background: "#fff" } }}
        />
      </View>
      <View style={[styles.name, styles.nameSpaceBlock]}>
        <RNPTextInput
          style={styles.name1}
          placeholder="Edit Email Address"
          mode="flat"
          underlineColor="#f15943"
          activeUnderlineColor="#0f6d65"
          theme={{ colors: { background: "#fff" } }}
        />
      </View>
      <View style={[styles.name, styles.nameSpaceBlock]}>
        <RNPTextInput
          style={styles.name1}
          placeholder="Phone Number"
          mode="flat"
          underlineColor="#f15943"
          activeUnderlineColor="#0f6d65"
          theme={{ colors: { background: "#fff" } }}
        />
      </View>
      <View style={[styles.name, styles.nameSpaceBlock]}>
        <RNPTextInput
          style={styles.name1}
          placeholder="Password"
          mode="flat"
          underlineColor="#f15943"
          activeUnderlineColor="#0f6d65"
          theme={{ colors: { background: "#fff" } }}
        />
      </View>
      <View style={[styles.updatebtncontainer, styles.nameSpaceBlock]}>
        <Pressable style={[styles.updatebtn, styles.updatebtnFlexBox]}>
          <Text style={[styles.update, styles.updateTypo]}>Update</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  nameFlexBox: {
    flexDirection: "row",
    backgroundColor: Color.white,
  },
  updateTypo: {
    textAlign: "center",
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
  },
  nameSpaceBlock: {
    marginTop: 14,
    alignSelf: "stretch",
  },
  updatebtnFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
  },
  profileedit: {
    top: -1,
    left: 26,
    fontSize: FontSize.size_lg,
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
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_mid,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    alignSelf: "stretch",
  },
  userimgIcon: {
    width: 129,
    height: 129,
  },
  editbtnIcon: {
    width: 25,
    height: 25,
  },
  profileimg: {
    top: 19,
    left: 124,
    position: "absolute",
  },
  userimg: {
    height: 152,
    backgroundColor: Color.white,
  },
  name1: {
    alignSelf: "stretch",
    flex: 1,
    backgroundColor: Color.white,
  },
  name: {
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_3xs,
    flexDirection: "row",
    backgroundColor: Color.white,
    overflow: "hidden",
  },
  update: {
    fontSize: FontSize.size_xl,
    color: Color.white,
    width: 150,
  },
  updatebtn: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.tomato,
    shadowColor: "rgba(15, 109, 101, 0.49)",
    paddingHorizontal: Padding.p_21xl,
    paddingVertical: Padding.p_6xs,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    alignSelf: "stretch",
  },
  updatebtncontainer: {
    paddingHorizontal: 129,
    paddingVertical: 0,
  },
  profileEdit: {
    paddingBottom: 32,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.white,
  },
});

export default ProfileEdit;
