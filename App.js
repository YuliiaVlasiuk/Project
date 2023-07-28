import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ImageBackground } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "./Screens/auth/LoginScreen";
import RegistrationScreen from "./Screens/auth/RegistrationScreen";

const AuthStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
       <AuthStack.Navigator>
       <AuthStack.Screen options={{headerShown:false}} name="Registration" component={RegistrationScreen} />
       <AuthStack.Screen options={{headerShown:false}} name="Login" component={LoginScreen} />
   </AuthStack.Navigator>
  </NavigationContainer>




    // <View style={styles.container}>
    //   <ImageBackground
    //     style={styles.image}
    //     source={require("./assets/images/PhotoBG.png")}
    //   >
    //     {/* <LoginScreen></LoginScreen>  */}
    //      <RegistrationScreen></RegistrationScreen> 
    //   </ImageBackground>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    resizeMode: "cover",
  },
});
