import React, { useState } from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { Input as RNKTextInput, Icon as RNKIcon } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const Doctor = () => {
  const [searchBarTextInput, setSearchBarTextInput] = useState();
  const navigation = useNavigation();

  return (
    <View style={styles.doctor}>
      <View style={styles.topbar}>
        <View style={styles.backhome}>
          <Text style={styles.doctor1}>Doctor</Text>
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
      <View
        style={[styles.doctorcategorygroupWrapper, styles.searchbarmainFlexBox]}
      >
        <View style={styles.doctorcategorygroup}>
          <View style={[styles.rectangleParent, styles.groupChildLayout2]}>
            <View style={[styles.groupChild, styles.groupChildPosition]} />
            <Text style={[styles.anesthesiologists, styles.oncologistsTypo]}>
              Anesthesiologists
            </Text>
            <Image
              style={[styles.anesthesiologists1Icon, styles.iconPosition5]}
              contentFit="cover"
              source={require("../assets/anesthesiologists-1.png")}
            />
          </View>
          <Pressable
            style={[styles.rectangleGroup, styles.groupChildLayout]}
            onPress={() => navigation.navigate("DoctorList")}
          >
            <View style={[styles.groupItem, styles.groupChildLayout]} />
            <Image
              style={[styles.allergists1Icon, styles.iconLayout8]}
              contentFit="cover"
              source={require("../assets/allergists-1.png")}
            />
            <Text style={[styles.allergists, styles.medicineTypo]}>
              Allergists
            </Text>
          </Pressable>
          <View style={[styles.rectangleContainer, styles.groupViewPosition]}>
            <View style={[styles.groupItem, styles.groupChildLayout]} />
            <Text
              style={[styles.colonAndRectal, styles.colonAndRectalTypo]}
            >{`Colon and Rectal
Surgeons`}</Text>
            <Image
              style={[styles.colon21Icon, styles.iconLayout7]}
              contentFit="cover"
              source={require("../assets/colon2-1.png")}
            />
          </View>
          <View style={[styles.groupView, styles.groupViewPosition]}>
            <View style={[styles.rectangleView, styles.groupChildLayout]} />
            <Text style={[styles.cardiologists, styles.oncologistsTypo]}>
              Cardiologists
            </Text>
            <Image
              style={[styles.cardiologists3Icon, styles.hematologistsPosition]}
              contentFit="cover"
              source={require("../assets/cardiologists-3.png")}
            />
          </View>
          <View
            style={[styles.rectangleParent1, styles.rectangleParentPosition14]}
          >
            <View style={[styles.groupChild1, styles.groupChildLayout]} />
            <Text style={[styles.dermatologists, styles.dermatologistsTypo]}>
              Dermatologists
            </Text>
            <Image
              style={styles.dermatologists1Icon}
              contentFit="cover"
              source={require("../assets/dermatologists-1.png")}
            />
          </View>
          <View
            style={[styles.rectangleParent2, styles.rectangleParentPosition14]}
          >
            <View style={[styles.groupChild2, styles.groupChildLayout]} />
            <Text
              style={[styles.criticalCareMedicine, styles.medicineTypo]}
            >{`Critical Care
Medicine Specialists`}</Text>
            <Image
              style={[styles.criticalCare1Icon, styles.iconPosition5]}
              contentFit="cover"
              source={require("../assets/critical-care-1.png")}
            />
          </View>
          <View
            style={[styles.rectangleParent3, styles.rectangleParentPosition13]}
          >
            <View style={[styles.groupItem, styles.groupChildLayout]} />
            <Text style={[styles.gastroenterologists, styles.medicineTypo]}>
              Gastroenterologists
            </Text>
            <Image
              style={[styles.gastroenterologists1Icon, styles.iconPosition3]}
              contentFit="cover"
              source={require("../assets/gastroenterologists-1.png")}
            />
          </View>
          <View
            style={[styles.rectangleParent4, styles.rectangleParentPosition13]}
          >
            <View style={[styles.rectangleView, styles.groupChildLayout]} />
            <Text style={[styles.endocrinologists, styles.medicineTypo]}>
              Endocrinologists
            </Text>
            <Image
              style={[styles.icon1, styles.iconLayout6]}
              contentFit="cover"
              source={require("../assets/4799049-1.png")}
            />
          </View>
          <View
            style={[styles.rectangleParent5, styles.rectangleParentPosition12]}
          >
            <View style={[styles.groupChild1, styles.groupChildLayout]} />
            <Text style={[styles.hematologists, styles.hematologistsPosition]}>
              Hematologists
            </Text>
            <Image
              style={[styles.hematologists1Icon, styles.iconLayout6]}
              contentFit="cover"
              source={require("../assets/hematologists-1.png")}
            />
          </View>
          <View
            style={[styles.rectangleParent6, styles.rectangleParentPosition12]}
          >
            <View style={[styles.groupChild2, styles.groupChildLayout]} />
            <Text
              style={[styles.geriatricMedicineSpecialists, styles.medicineTypo]}
            >{`Geriatric Medicine
Specialists`}</Text>
            <Image
              style={[
                styles.geriatricMedicineSpecialistsIcon,
                styles.iconPosition4,
              ]}
              contentFit="cover"
              source={require("../assets/geriatricmedicinespecialists-1.png")}
            />
          </View>
          <View
            style={[styles.rectangleParent7, styles.rectangleParentPosition11]}
          >
            <View style={[styles.groupChild7, styles.groupChildLayout]} />
            <Text
              style={[
                styles.infectiousDiseaseSpecialists,
                styles.hospicePalliativeTypo,
              ]}
            >{`Infectious Disease
Specialists`}</Text>
            <Image
              style={[
                styles.infectiousDiseaseSpecialistsIcon,
                styles.iconLayout4,
              ]}
              contentFit="cover"
              source={require("../assets/infectiousdiseasespecialists-1.png")}
            />
          </View>
          <View
            style={[styles.rectangleParent8, styles.rectangleParentPosition11]}
          >
            <View style={[styles.groupChild8, styles.groupChildLayout]} />
            <Text
              style={[styles.hospicePalliative, styles.hospicePalliativeTypo]}
            >{`Hospice & Palliative
Medicine Specialists`}</Text>
            <Image
              style={[styles.hospicePalliativeMedicineIcon, styles.iconLayout7]}
              contentFit="cover"
              source={require("../assets/hospicepalliativemedicinespecialists-1.png")}
            />
          </View>
          <View
            style={[styles.rectangleParent9, styles.rectangleParentPosition10]}
          >
            <View style={[styles.groupChild1, styles.groupChildLayout]} />
            <Text style={[styles.medicalGeneticists, styles.oncologistsTypo]}>
              Medical Geneticists
            </Text>
            <Image
              style={[
                styles.scientificSpiralGeneticDnaIcon,
                styles.iconPosition2,
              ]}
              contentFit="cover"
              source={require("../assets/scientificspiralgeneticdna3diconillustrationpng-1.png")}
            />
          </View>
          <View
            style={[styles.rectangleParent10, styles.rectangleParentPosition10]}
          >
            <View style={[styles.groupChild2, styles.groupChildLayout]} />
            <Text style={[styles.internists, styles.iconPosition2]}>
              Internists
            </Text>
            <Image
              style={[styles.removebgPreview1Icon, styles.iconLayout3]}
              contentFit="cover"
              source={require("../assets/5503237removebgpreview-1.png")}
            />
          </View>
          <View
            style={[styles.rectangleParent11, styles.rectangleParentPosition9]}
          >
            <View style={[styles.groupChild7, styles.groupChildLayout]} />
            <Text style={[styles.neurologists, styles.medicineTypo]}>
              Neurologists
            </Text>
            <Image
              style={[styles.humanBrainSymbolIconPng1, styles.iconLayout2]}
              contentFit="cover"
              source={require("../assets/humanbrainsymboliconpng-1.png")}
            />
          </View>
          <View
            style={[styles.rectangleParent12, styles.rectangleParentPosition9]}
          >
            <View style={[styles.groupChild8, styles.groupChildLayout]} />
            <Text style={[styles.nephrologists, styles.medicineTypo]}>
              Nephrologists
            </Text>
            <Image
              style={[styles.nephrologists1Icon, styles.iconPosition1]}
              contentFit="cover"
              source={require("../assets/nephrologists-1.png")}
            />
          </View>
          <View
            style={[styles.rectangleParent13, styles.rectangleParentPosition8]}
          >
            <View style={[styles.groupChild1, styles.groupChildLayout]} />
            <Text style={[styles.oncologists, styles.oncologistsPosition]}>
              Oncologists
            </Text>
            <Image
              style={[styles.icon2, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/5503251-1.png")}
            />
          </View>
          <View
            style={[styles.rectangleParent14, styles.rectangleParentPosition8]}
          >
            <View style={[styles.groupChild2, styles.groupChildLayout]} />
            <Text
              style={[
                styles.obstetriciansAndGynecologist,
                styles.ophthalmologistsTypo,
              ]}
            >{`Obstetricians and
Gynecologists`}</Text>
            <Image
              style={[styles.icon3, styles.icon3Position]}
              contentFit="cover"
              source={require("../assets/6558415-1.png")}
            />
          </View>
          <View
            style={[styles.rectangleParent15, styles.rectangleParentPosition7]}
          >
            <View style={[styles.groupChild7, styles.groupChildLayout]} />
            <Text style={[styles.osteopaths, styles.osteopathsPosition]}>
              Osteopaths
            </Text>
            <Image
              style={[styles.osteopaths1Icon, styles.iconPosition2]}
              contentFit="cover"
              source={require("../assets/osteopaths-1.png")}
            />
          </View>
          <View
            style={[styles.rectangleParent16, styles.rectangleParentPosition7]}
          >
            <View style={[styles.groupChild8, styles.groupChildLayout]} />
            <Text
              style={[styles.ophthalmologists, styles.ophthalmologistsTypo]}
            >
              Ophthalmologists
            </Text>
            <Image
              style={[styles.icon4, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/6430622-1.png")}
            />
          </View>
          <View
            style={[styles.rectangleParent17, styles.rectangleParentPosition6]}
          >
            <View style={[styles.groupChild1, styles.groupChildLayout]} />
            <Text style={[styles.pathologists, styles.osteopathsPosition]}>
              Pathologists
            </Text>
            <Image
              style={[styles.pngtreeMicroscope3dIconEdu, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/pngtreemicroscope3diconeducationandscientistconceptimagespngimage-6595586-1.png")}
            />
          </View>
          <View
            style={[styles.rectangleParent18, styles.rectangleParentPosition6]}
          >
            <View style={[styles.groupChild2, styles.groupChildLayout]} />
            <Text style={[styles.otolaryngologists, styles.medicineTypo]}>
              Otolaryngologists
            </Text>
            <Image
              style={[styles.otolaryngologists1Icon, styles.iconPosition3]}
              contentFit="cover"
              source={require("../assets/otolaryngologists-1.png")}
            />
          </View>
          <View
            style={[styles.rectangleParent19, styles.rectangleParentPosition5]}
          >
            <View style={[styles.groupChild7, styles.groupChildLayout]} />
            <Text style={[styles.osteopaths, styles.osteopathsPosition]}>
              Physiatrists
            </Text>
            <Image
              style={styles.doctor556558447151291Icon}
              contentFit="cover"
              source={require("../assets/doctor55655844715129-1.png")}
            />
          </View>
          <View
            style={[styles.rectangleParent20, styles.rectangleParentPosition5]}
          >
            <View style={[styles.groupChild8, styles.groupChildLayout]} />
            <Text style={[styles.pediatricians, styles.medicineTypo]}>
              Pediatricians
            </Text>
            <Image
              style={[styles.pngtreeKidOnMedicalCheckUIcon, styles.iconLayout2]}
              contentFit="cover"
              source={require("../assets/pngtreekidonmedicalcheckupwithmalepediatricianpngimage-5081085removebgpreview-1-1.png")}
            />
          </View>
          <View
            style={[styles.rectangleParent21, styles.rectangleParentPosition4]}
          >
            <View style={[styles.groupChild1, styles.groupChildLayout]} />
            <Text style={[styles.podiatrists, styles.oncologistsTypo]}>
              Podiatrists
            </Text>
            <Image
              style={[
                styles.kisspngFootAndAnkleSurgeryIcon,
                styles.osteopathsPosition,
              ]}
              contentFit="cover"
              source={require("../assets/kisspngfootandanklesurgerypodiatristpodiatrydiabetibluefootprints5a7a3e9c978c94-1.png")}
            />
          </View>
          <View
            style={[styles.rectangleParent22, styles.rectangleParentPosition4]}
          >
            <View style={[styles.groupChild2, styles.groupChildLayout]} />
            <Text style={[styles.plasticSurgeons, styles.medicineTypo]}>
              Plastic Surgeons
            </Text>
            <Image
              style={styles.plasticSurgeons1}
              contentFit="cover"
              source={require("../assets/plastic-surgeons-1.png")}
            />
          </View>
          <View
            style={[styles.rectangleParent23, styles.rectangleParentPosition3]}
          >
            <View style={[styles.groupChild7, styles.groupChildLayout]} />
            <Text style={[styles.neurologists, styles.medicineTypo]}>
              Psychiatrists
            </Text>
            <Image
              style={styles.mentalHealthAndMedicineIcoIcon}
              contentFit="cover"
              source={require("../assets/mentalhealthandmedicineicon3dillustrationpng-1.png")}
            />
          </View>
          <View
            style={[styles.rectangleParent24, styles.rectangleParentPosition3]}
          >
            <View style={[styles.groupChild8, styles.groupChildLayout]} />
            <Text
              style={[styles.preventiveMedicineSpecialist, styles.medicineTypo]}
            >{`Preventive Medicine
Specialists`}</Text>
            <Image
              style={[styles.dRenderingMedicalReportWitIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/3drenderingmedicalreportwithbloodtubepillsandstethoscopesigninghealthchecklistmedicalcheckupreport3drenderillustrationpng-1.png")}
            />
          </View>
          <View
            style={[styles.rectangleParent25, styles.rectangleParentPosition2]}
          >
            <View style={[styles.groupChild1, styles.groupChildLayout]} />
            <Text style={[styles.radiologists, styles.oncologistsTypo]}>
              Radiologists
            </Text>
            <Image
              style={[styles.icon5, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/4788914-1.png")}
            />
          </View>
          <View
            style={[styles.rectangleParent26, styles.rectangleParentPosition2]}
          >
            <View style={[styles.groupChild2, styles.groupChildLayout]} />
            <Text style={[styles.pulmonologists, styles.dermatologistsTypo]}>
              Pulmonologists
            </Text>
            <Image
              style={[
                styles.lungs546347345516501Icon,
                styles.oncologistsPosition,
              ]}
              contentFit="cover"
              source={require("../assets/lungs54634734551650-1.png")}
            />
          </View>
          <View
            style={[styles.rectangleParent27, styles.rectangleParentPosition1]}
          >
            <View style={[styles.groupChild7, styles.groupChildLayout]} />
            <Text
              style={[
                styles.sleepMedicineSpecialists,
                styles.dermatologistsTypo,
              ]}
            >{`Sleep Medicine
Specialists`}</Text>
            <Image
              style={[styles.sleepingPills3dRenderIcon, styles.iconLayout5]}
              contentFit="cover"
              source={require("../assets/sleepingpills3drendericonillustrationpng-1.png")}
            />
          </View>
          <View
            style={[styles.rectangleParent28, styles.rectangleParentPosition1]}
          >
            <View style={[styles.groupChild8, styles.groupChildLayout]} />
            <Text style={[styles.rheumatologists, styles.colonAndRectalTypo]}>
              Rheumatologists
            </Text>
            <Image
              style={[
                styles.pictoGenoux1RemovebgPrevieIcon,
                styles.iconPosition4,
              ]}
              contentFit="cover"
              source={require("../assets/pictogenoux1removebgpreview-1.png")}
            />
          </View>
          <View
            style={[styles.rectangleParent29, styles.rectangleParentPosition]}
          >
            <View style={[styles.groupChild1, styles.groupChildLayout]} />
            <Text style={[styles.generalSurgeons, styles.oncologistsTypo]}>
              General Surgeons
            </Text>
            <Image
              style={[styles.imagesRemovebgPreview1Icon, styles.iconPosition1]}
              contentFit="cover"
              source={require("../assets/imagesremovebgpreview-1.png")}
            />
          </View>
          <View
            style={[styles.rectangleParent30, styles.rectangleParentPosition]}
          >
            <View style={[styles.groupChild2, styles.groupChildLayout]} />
            <Text
              style={[styles.sportsMedicineSpecialists, styles.medicineTypo]}
            >{`Sports Medicine
Specialists`}</Text>
            <Image
              style={[
                styles.pngTransparentSportsMedicinIcon,
                styles.iconPosition4,
              ]}
              contentFit="cover"
              source={require("../assets/pngtransparentsportsmedicinemedicineballexerciseballgraphyyogaballsburnfatburningsportorangethumbnailremovebgpreview-1.png")}
            />
          </View>
          <View style={[styles.rectangleParent31, styles.groupChildLayout]}>
            <View style={[styles.groupChild7, styles.groupChildLayout]} />
            <Text style={[styles.physiatrists1, styles.oncologistsPosition]}>
              Physiatrists
            </Text>
          </View>
          <View style={[styles.rectangleParent32, styles.groupChildLayout]}>
            <View style={[styles.groupChild8, styles.groupChildLayout]} />
            <Text style={[styles.urologists, styles.icon3Position]}>
              Urologists
            </Text>
            <Image
              style={[styles.urologistIcon1, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/urologisticon-1.png")}
            />
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
  groupChildLayout2: {
    height: 116,
    width: 144,
    position: "absolute",
  },
  groupChildPosition: {
    backgroundColor: Color.forestgreen,
    borderRadius: Border.br_mini,
    left: 0,
    top: 0,
  },
  oncologistsTypo: {
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
    fontSize: FontSize.size_sm,
    color: Color.black,
  },
  iconPosition5: {
    width: 48,
    left: 48,
    position: "absolute",
  },
  groupChildLayout: {
    height: 120,
    width: 144,
    position: "absolute",
  },
  iconLayout8: {
    height: 57,
    width: 52,
    left: 46,
  },
  medicineTypo: {
    fontFamily: FontFamily.openSansRegular,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    color: Color.black,
  },
  groupViewPosition: {
    top: 130,
    height: 120,
    width: 144,
    position: "absolute",
  },
  colonAndRectalTypo: {
    left: 17,
    fontFamily: FontFamily.openSansRegular,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    color: Color.black,
    position: "absolute",
  },
  iconLayout7: {
    width: 47,
    position: "absolute",
  },
  hematologistsPosition: {
    left: 28,
    position: "absolute",
  },
  rectangleParentPosition14: {
    top: 260,
    height: 120,
    width: 144,
    position: "absolute",
  },
  dermatologistsTypo: {
    left: 22,
    fontFamily: FontFamily.openSansRegular,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    color: Color.black,
    position: "absolute",
  },
  rectangleParentPosition13: {
    top: 390,
    height: 120,
    width: 144,
    position: "absolute",
  },
  iconPosition3: {
    left: 51,
    top: 22,
    position: "absolute",
  },
  iconLayout6: {
    width: 51,
    top: 22,
    height: 51,
    position: "absolute",
  },
  rectangleParentPosition12: {
    top: 522,
    height: 120,
    width: 144,
    position: "absolute",
  },
  iconPosition4: {
    top: 22,
    position: "absolute",
  },
  rectangleParentPosition11: {
    top: 652,
    height: 120,
    width: 144,
    position: "absolute",
  },
  hospicePalliativeTypo: {
    top: 78,
    fontFamily: FontFamily.openSansRegular,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    color: Color.black,
    position: "absolute",
  },
  iconLayout4: {
    height: 52,
    position: "absolute",
  },
  rectangleParentPosition10: {
    top: 782,
    height: 120,
    width: 144,
    position: "absolute",
  },
  iconPosition2: {
    left: 41,
    position: "absolute",
  },
  iconLayout3: {
    width: 57,
    height: 57,
  },
  rectangleParentPosition9: {
    top: 912,
    height: 120,
    width: 144,
    position: "absolute",
  },
  iconLayout2: {
    width: 61,
    left: 42,
  },
  iconPosition1: {
    height: 54,
    top: 22,
    position: "absolute",
  },
  rectangleParentPosition8: {
    top: 1042,
    height: 120,
    width: 144,
    position: "absolute",
  },
  oncologistsPosition: {
    left: 36,
    position: "absolute",
  },
  iconPosition: {
    left: 43,
    position: "absolute",
  },
  ophthalmologistsTypo: {
    left: 14,
    fontFamily: FontFamily.openSansRegular,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    color: Color.black,
    position: "absolute",
  },
  icon3Position: {
    left: 37,
    position: "absolute",
  },
  rectangleParentPosition7: {
    top: 1172,
    height: 120,
    width: 144,
    position: "absolute",
  },
  osteopathsPosition: {
    left: 34,
    position: "absolute",
  },
  iconLayout1: {
    height: 64,
    width: 64,
    left: 40,
    position: "absolute",
  },
  rectangleParentPosition6: {
    top: 1302,
    height: 120,
    width: 144,
    position: "absolute",
  },
  rectangleParentPosition5: {
    top: 1432,
    height: 120,
    width: 144,
    position: "absolute",
  },
  rectangleParentPosition4: {
    top: 1562,
    height: 120,
    width: 144,
    position: "absolute",
  },
  rectangleParentPosition3: {
    top: 1692,
    height: 120,
    width: 144,
    position: "absolute",
  },
  iconLayout: {
    height: 78,
    position: "absolute",
  },
  rectangleParentPosition2: {
    top: 1822,
    height: 120,
    width: 144,
    position: "absolute",
  },
  rectangleParentPosition1: {
    top: 1952,
    height: 120,
    width: 144,
    position: "absolute",
  },
  iconLayout5: {
    width: 53,
    left: 46,
  },
  rectangleParentPosition: {
    top: 2082,
    height: 120,
    width: 144,
    position: "absolute",
  },
  doctor1: {
    top: -1,
    left: 30,
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
    top: "50%",
    width: 23,
    height: 22,
    left: 1,
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
    height: 116,
    width: 144,
    position: "absolute",
  },
  anesthesiologists: {
    width: 108,
    height: 16,
    left: 18,
    position: "absolute",
    top: 92,
  },
  anesthesiologists1Icon: {
    top: 13,
    height: 55,
  },
  rectangleParent: {
    left: 154,
    top: 0,
  },
  groupItem: {
    backgroundColor: Color.mistyrose_100,
    borderRadius: Border.br_mini,
    height: 120,
    left: 0,
    top: 0,
  },
  allergists1Icon: {
    top: 9,
    position: "absolute",
  },
  allergists: {
    left: 27,
    width: 90,
    height: 1,
    top: 92,
    position: "absolute",
  },
  rectangleGroup: {
    left: 0,
    top: 0,
  },
  colonAndRectal: {
    top: 79,
  },
  colon21Icon: {
    height: 53,
    top: 17,
    left: 48,
    width: 47,
  },
  rectangleContainer: {
    left: 154,
  },
  rectangleView: {
    backgroundColor: Color.darkseagreen_100,
    borderRadius: Border.br_mini,
    height: 120,
    left: 0,
    top: 0,
  },
  cardiologists: {
    left: 32,
    top: 96,
    position: "absolute",
  },
  cardiologists3Icon: {
    width: 88,
    height: 53,
    top: 17,
  },
  groupView: {
    left: 0,
  },
  groupChild1: {
    backgroundColor: Color.forestgreen,
    borderRadius: Border.br_mini,
    left: 0,
    top: 0,
  },
  dermatologists: {
    top: 96,
  },
  dermatologists1Icon: {
    left: 50,
    width: 44,
    height: 53,
    top: 17,
    position: "absolute",
  },
  rectangleParent1: {
    left: 154,
  },
  groupChild2: {
    backgroundColor: Color.darksalmon,
    borderRadius: Border.br_mini,
    height: 120,
    left: 0,
    top: 0,
  },
  criticalCareMedicine: {
    left: 7,
    top: 79,
    position: "absolute",
  },
  criticalCare1Icon: {
    height: 51,
    top: 17,
  },
  rectangleParent2: {
    left: 0,
  },
  gastroenterologists: {
    left: 8,
    top: 96,
    position: "absolute",
  },
  gastroenterologists1Icon: {
    width: 42,
    height: 51,
  },
  rectangleParent3: {
    left: 154,
  },
  endocrinologists: {
    top: 96,
    left: 18,
    position: "absolute",
  },
  icon1: {
    left: 47,
  },
  rectangleParent4: {
    left: 0,
  },
  hematologists: {
    top: 96,
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
    fontSize: FontSize.size_sm,
    color: Color.black,
  },
  hematologists1Icon: {
    left: 46,
    width: 51,
  },
  rectangleParent5: {
    left: 154,
  },
  geriatricMedicineSpecialists: {
    left: 13,
    top: 79,
    position: "absolute",
  },
  geriatricMedicineSpecialistsIcon: {
    left: 53,
    width: 38,
    height: 51,
  },
  rectangleParent6: {
    left: 0,
  },
  groupChild7: {
    backgroundColor: Color.mistyrose_200,
    borderRadius: Border.br_mini,
    height: 120,
    left: 0,
    top: 0,
  },
  infectiousDiseaseSpecialists: {
    left: 13,
  },
  infectiousDiseaseSpecialistsIcon: {
    width: 53,
    left: 46,
    top: 18,
  },
  rectangleParent7: {
    left: 154,
  },
  groupChild8: {
    backgroundColor: Color.darkseagreen_200,
    borderRadius: Border.br_mini,
    height: 120,
    left: 0,
    top: 0,
  },
  hospicePalliative: {
    left: 7,
  },
  hospicePalliativeMedicineIcon: {
    left: 49,
    height: 50,
    top: 20,
  },
  rectangleParent8: {
    left: 0,
  },
  medicalGeneticists: {
    left: 12,
    top: 96,
    position: "absolute",
  },
  scientificSpiralGeneticDnaIcon: {
    width: 62,
    height: 62,
    top: 16,
  },
  rectangleParent9: {
    left: 154,
  },
  internists: {
    top: 96,
    fontFamily: FontFamily.openSansRegular,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    color: Color.black,
  },
  removebgPreview1Icon: {
    left: 44,
    top: 17,
    position: "absolute",
  },
  rectangleParent10: {
    left: 0,
  },
  neurologists: {
    left: 31,
    top: 96,
    position: "absolute",
  },
  humanBrainSymbolIconPng1: {
    top: 23,
    height: 52,
    position: "absolute",
  },
  rectangleParent11: {
    left: 154,
  },
  nephrologists: {
    left: 26,
    top: 96,
    position: "absolute",
  },
  nephrologists1Icon: {
    width: 61,
    left: 42,
  },
  rectangleParent12: {
    left: 0,
  },
  oncologists: {
    top: 96,
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
    fontSize: FontSize.size_sm,
    color: Color.black,
  },
  icon2: {
    width: 59,
    height: 59,
    top: 12,
  },
  rectangleParent13: {
    left: 154,
  },
  obstetriciansAndGynecologist: {
    top: 79,
  },
  icon3: {
    width: 71,
    height: 71,
    top: 11,
  },
  rectangleParent14: {
    left: 0,
  },
  osteopaths: {
    top: 96,
    fontFamily: FontFamily.openSansRegular,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    color: Color.black,
  },
  osteopaths1Icon: {
    width: 63,
    height: 61,
    top: 20,
  },
  rectangleParent15: {
    left: 154,
  },
  ophthalmologists: {
    top: 96,
  },
  icon4: {
    top: 21,
  },
  rectangleParent16: {
    left: 0,
  },
  pathologists: {
    top: 96,
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
    fontSize: FontSize.size_sm,
    color: Color.black,
  },
  pngtreeMicroscope3dIconEdu: {
    top: 18,
  },
  rectangleParent17: {
    left: 154,
  },
  otolaryngologists: {
    left: 15,
    top: 96,
    position: "absolute",
  },
  otolaryngologists1Icon: {
    width: 43,
    height: 55,
  },
  rectangleParent18: {
    left: 0,
  },
  doctor556558447151291Icon: {
    left: 38,
    width: 68,
    height: 68,
    top: 12,
    position: "absolute",
  },
  rectangleParent19: {
    left: 154,
  },
  pediatricians: {
    left: 29,
    top: 96,
    position: "absolute",
  },
  pngtreeKidOnMedicalCheckUIcon: {
    top: 19,
    height: 69,
    position: "absolute",
  },
  rectangleParent20: {
    left: 0,
  },
  podiatrists: {
    left: 39,
    top: 96,
    position: "absolute",
  },
  kisspngFootAndAnkleSurgeryIcon: {
    width: 76,
    height: 65,
    top: 16,
  },
  rectangleParent21: {
    left: 154,
  },
  plasticSurgeons: {
    left: 21,
    top: 96,
    position: "absolute",
  },
  plasticSurgeons1: {
    width: 60,
    height: 60,
    left: 42,
    top: 20,
    position: "absolute",
  },
  rectangleParent22: {
    left: 0,
  },
  mentalHealthAndMedicineIcoIcon: {
    top: 1,
    left: 25,
    width: 95,
    height: 95,
    position: "absolute",
  },
  rectangleParent23: {
    left: 154,
  },
  preventiveMedicineSpecialist: {
    left: 6,
    top: 79,
    position: "absolute",
  },
  dRenderingMedicalReportWitIcon: {
    width: 116,
    left: 15,
    top: 11,
  },
  rectangleParent24: {
    left: 0,
  },
  radiologists: {
    left: 35,
    top: 96,
    position: "absolute",
  },
  icon5: {
    left: 33,
    width: 78,
    top: 12,
  },
  rectangleParent25: {
    left: 154,
  },
  pulmonologists: {
    top: 99,
  },
  lungs546347345516501Icon: {
    width: 73,
    height: 73,
    top: 17,
  },
  rectangleParent26: {
    left: 0,
  },
  sleepMedicineSpecialists: {
    top: 79,
  },
  sleepingPills3dRenderIcon: {
    top: 21,
    height: 53,
    position: "absolute",
  },
  rectangleParent27: {
    left: 154,
  },
  rheumatologists: {
    top: 96,
  },
  pictoGenoux1RemovebgPrevieIcon: {
    left: 9,
    width: 96,
    height: 63,
  },
  rectangleParent28: {
    left: 0,
  },
  generalSurgeons: {
    top: 96,
    left: 18,
    position: "absolute",
  },
  imagesRemovebgPreview1Icon: {
    left: 45,
    width: 54,
  },
  rectangleParent29: {
    left: 154,
  },
  sportsMedicineSpecialists: {
    left: 20,
    top: 79,
    position: "absolute",
  },
  pngTransparentSportsMedicinIcon: {
    height: 57,
    width: 52,
    left: 46,
  },
  rectangleParent30: {
    left: 0,
  },
  physiatrists1: {
    fontWeight: "500",
    fontFamily: FontFamily.latoMedium,
    top: 96,
    fontSize: FontSize.size_sm,
    left: 36,
    textAlign: "center",
    color: Color.black,
  },
  rectangleParent31: {
    top: 2212,
    display: "none",
    left: 154,
  },
  urologists: {
    top: 96,
    fontFamily: FontFamily.openSansRegular,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    color: Color.black,
  },
  urologistIcon1: {
    top: 21,
    width: 57,
    height: 57,
  },
  rectangleParent32: {
    top: 2213,
    left: 1,
  },
  doctorcategorygroup: {
    width: 298,
    height: 2333,
  },
  doctorcategorygroupWrapper: {
    paddingHorizontal: Padding.p_11xl,
    paddingVertical: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  doctor: {
    paddingBottom: Padding.p_smi,
    alignItems: "center",
    width: "100%",
    flex: 1,
    backgroundColor: Color.white,
  },
});

export default Doctor;
