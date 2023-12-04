import { StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Colors} from "./constants/styling.js"
import {MainMenuScreen} from "./screens/MainMenu.js"

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: Colors.backgroundPrimaryColor},
        contentStyle: {backgroundColor: Colors.buttonPrimaryColor}
      }}>
        <Stack.Screen
        name="MainMenu"
        component = {MainMenuScreen}
        options = {{title: "Main Menu"}}/>

      </Stack.Navigator>
    </NavigationContainer>
  
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex:1,
  }
})


