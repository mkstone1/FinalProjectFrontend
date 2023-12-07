import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Colors } from "./constants/styling.js";
import MainMenuScreen from "./screens/MainMenuScreen.js";
import CategorySelectionScreen from "./screens/CategorySelectionScreen.js";
import CardSelectionScreen from "./screens/CardSelectionScreen.js";
import CardScreen from "./screens/CardScreen.js";
import GameCategorySelectionScreen from "./screens/GameCategorySelectionScreen.js";
import GameCardSelectionScreen from "./screens/GameCardSelectionScreen.js";
import GameScoreScreen from "./screens/GameScoreScreen.js";
import GameCardScreen from "./screens/GameCardScreen.js";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          headerStyle: { backgroundColor: Colors.listItemPrimaryColor },
          contentStyle: { backgroundColor: Colors.backgroundPrimaryColor },
        }}
      >
        <Stack.Screen
          name="MainMenuScreen"
          component={MainMenuScreen}
          options={{ title: "" }}
        />
        <Stack.Screen
          name="CategoriesScreen"
          component={CategorySelectionScreen}
          options={{ title: "" }}
        />

        <Stack.Screen
          name="CardSelectionScreen"
          component={CardSelectionScreen}
          options={{ title: "" }}
        />

        <Stack.Screen
          name="CardScreen"
          component={CardScreen}
          options={{ title: "" }}
        />

        <Stack.Screen
          name="GameCategorySelectionScreen"
          component={GameCategorySelectionScreen}
          options={{ title: "" }}
        />
        <Stack.Screen
          name="GameCardSelectionScreen"
          component={GameCardSelectionScreen}
          options={{ title: "" }}
        />
        <Stack.Screen
          name="GameScoreScreen"
          component={GameScoreScreen}
          options={{ title: "" }}
        />
            <Stack.Screen
          name="GameCardScreen"
          component={GameCardScreen}
          options={{ title: "" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
