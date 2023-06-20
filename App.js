const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import StartingScreen from "./screens/StartingScreen";
import AppointmentList from "./screens/AppointmentList";
import BookAppointment from "./screens/BookAppointment";
import DoctorList from "./screens/DoctorList";
import ProfileEdit from "./screens/ProfileEdit";
import ProfileSetting from "./screens/ProfileSetting";
import Creches from "./screens/Creches";
import Nurses from "./screens/Nurses";
import Chemist from "./screens/Chemist";
import Doctor from "./screens/Doctor";
import Home from "./screens/Home";
import DoctorSignup from "./screens/DoctorSignup";
import DoctorLogin from "./screens/DoctorLogin";
import PatientSignup from "./screens/PatientSignup";
import PatientLogin from "./screens/PatientLogin";
import SplashScreen from "./screens/SplashScreen";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { IconRegistry, ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);
  const [fontsLoaded, error] = useFonts({
    "Open Sans_regular": require("./assets/fonts/Open_Sans_regular.ttf"),
    "Open Sans_bold": require("./assets/fonts/Open_Sans_bold.ttf"),
    "Open Sans_extrabold": require("./assets/fonts/Open_Sans_extrabold.ttf"),
    Lato_regular: require("./assets/fonts/Lato_regular.ttf"),
    Lato_medium: require("./assets/fonts/Lato_medium.ttf"),
  });

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 1000);
  }, []);

  function MaterialIcon({ name, style }) {
    const { height, tintColor, ...iconStyle } = StyleSheet.flatten(style);
    return (
      <MIcon name={name} size={height} color={tintColor} style={iconStyle} />
    );
  }

  const IconProvider = (name) => ({
    toReactElement: (props) => MaterialIcon({ name, ...props }),
  });

  function createIconsMap() {
    return new Proxy(
      {},
      {
        get(target, name) {
          return IconProvider(name);
        },
      }
    );
  }
  const MaterialIconsPack = {
    name: "material",
    icons: createIconsMap(),
  };

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <IconRegistry icons={[MaterialIconsPack]} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          {hideSplashScreen ? (
            <Stack.Navigator
              initialRouteName="StartingScreen"
              screenOptions={{ headerShown: false }}
            >
              <Stack.Screen
                name="StartingScreen"
                component={StartingScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="AppointmentList"
                component={AppointmentList}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="BookAppointment"
                component={BookAppointment}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="DoctorList"
                component={DoctorList}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ProfileEdit"
                component={ProfileEdit}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ProfileSetting"
                component={ProfileSetting}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Creches"
                component={Creches}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Nurses"
                component={Nurses}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Chemist"
                component={Chemist}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Doctor"
                component={Doctor}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="DoctorSignup"
                component={DoctorSignup}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="DoctorLogin"
                component={DoctorLogin}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="PatientSignup"
                component={PatientSignup}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="PatientLogin"
                component={PatientLogin}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SplashScreen"
                component={SplashScreen}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          ) : (
            <SplashScreen />
          )}
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
};
export default App;
